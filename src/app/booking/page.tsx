"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { StepIndicator } from "@/components/ui/StepIndicator";
import { branches } from "@/data/branches";
import { Building2, Utensils, BedDouble, User, CheckCircle2, ArrowRight } from "lucide-react";

// --- Validation Schemas ---
const step1Schema = z.object({
  category: z.enum(["mens", "womens"]),
  branchId: z.string().min(1, "Please select a branch"),
});

const step2Schema = z.object({
  roomType: z.enum(["AC", "Non-AC"]),
  sharingType: z.any().transform(Number),
  foodOption: z.enum(["With Food", "Without Food"]),
  bunkPreference: z.enum(["Upper", "Lower"]),
});

const step3Schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid 10-digit phone number"),
  email: z.string().email("Invalid email address"),
  tenantType: z.enum(["Student", "Working Professional", "Job Seeker", "Other"]),
  moveInDate: z.string().min(1, "Select a move-in date"),
  dpdpConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to data processing under the DPDP Act 2023 to submit",
  }),
  botTrap: z.string().optional(),
});

const formSchema = step1Schema.merge(step2Schema).merge(step3Schema);
type FormData = z.infer<typeof formSchema>;

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading booking form...</div>}>
      <BookingForm />
    </Suspense>
  );
}

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize with URL params if available (e.g. from branch card click)
  const initialBranch = searchParams?.get("branch") || "";
  const initialCategory = searchParams?.get("category") as "mens" | "womens" | undefined;

  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [resendTimer, setResendTimer] = useState(0);
  const lastPhoneRef = useRef<string | undefined>(undefined);
  
  const steps = ["Location", "Room Preferences", "Personal Details"];

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: initialCategory || "mens",
      branchId: initialBranch || (branches[0]?.id || ""),
      bunkPreference: "Lower",
      tenantType: "Working Professional",
      dpdpConsent: false,
      botTrap: "",
    },
    mode: "onChange"
  });

  const category = watch("category");
  const phoneValue = watch("phone");
  const filteredBranches = branches.filter(b => category ? b.category === category : true);

  useEffect(() => {
    if (lastPhoneRef.current === phoneValue) {
      return;
    }

    lastPhoneRef.current = phoneValue;

    if (!otpSent && !otpVerified && !generatedOtp) {
      return;
    }

    setOtpSent(false);
    setOtpVerified(false);
    setGeneratedOtp("");
    setOtpCode("");
    setOtpError(null);
    setResendTimer(0);
  }, [phoneValue, generatedOtp, otpSent, otpVerified]);

  useEffect(() => {
    if (resendTimer <= 0) {
      return;
    }

    const timerId = window.setInterval(() => {
      setResendTimer((value) => Math.max(0, value - 1));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [resendTimer]);

  const sendOtp = useCallback(() => {
    if (!/^[0-9]{10}$/.test(phoneValue || "")) {
      setOtpError("Enter a valid 10-digit phone number first.");
      setOtpSent(false);
      setOtpVerified(false);
      return;
    }

    if (resendTimer > 0) {
      return;
    }

    const newOtp = String(Math.floor(1000 + Math.random() * 9000));
    setGeneratedOtp(newOtp);
    setOtpSent(true);
    setOtpVerified(false);
    setOtpCode("");
    setOtpError(null);
    setResendTimer(30);
  }, [phoneValue, resendTimer]);

  useEffect(() => {
    if (step !== 2 || otpSent || otpVerified) {
      return;
    }

    if (/^[0-9]{10}$/.test(phoneValue || "")) {
      sendOtp();
    }
  }, [phoneValue, otpSent, otpVerified, sendOtp, step]);

  const verifyOtp = () => {
    if (!otpSent) {
      setOtpError("Send OTP first.");
      return;
    }

    if (otpCode.trim() === generatedOtp) {
      setOtpVerified(true);
      setOtpError(null);
      return;
    }

    setOtpVerified(false);
    setOtpError("Invalid OTP. Try again.");
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 0) fieldsToValidate = ["category", "branchId"];
    if (step === 1) fieldsToValidate = ["roomType", "sharingType", "foodOption", "bunkPreference"];

    const isStepValid = await trigger(fieldsToValidate as any);
    if (isStepValid) {
      setStep((p) => Math.min(p + 1, steps.length - 1));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => setStep((p) => Math.max(p - 1, 0));

  const onSubmit = async (data: FormData) => {
    // Spam bot honeypot detection
    if (data.botTrap) {
      setSuccess(true);
      return;
    }

    if (!otpVerified) {
      setOtpError("Please verify the OTP before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Send to Google Sheets via proxy API
      const res = await fetch("/api/sheets?type=booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setSuccess(true);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Booking failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-surface pt-28 pb-20 flex items-center justify-center">
        <Card className="max-w-2xl w-full mx-4 shadow-2xl border-green-100">
          <CardContent className="p-10 text-center">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Booking Requested!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for choosing Aishwaraya Hostels. Your booking request has been received. Our team will contact you shortly on your provided phone number to confirm availability and proceed with payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="primary">Return to Home</Button>
              <Button href="/branches" variant="outline">Explore More Branches</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Stay</h1>
          <p className="text-gray-600">Complete the form below to reserve your bed. No payment required right now.</p>
        </div>

        <div className="mb-16 mt-8 hidden sm:block px-8">
          <StepIndicator steps={steps} currentStep={step} />
        </div>

        <Card className="shadow-xl bg-white/90 backdrop-blur-xl border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="p-6 md:p-10">
              
              {/* STEP 1: Location */}
              {step === 0 && (
                <div className="animate-fade-in space-y-8">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">Select Location</h2>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-gray-700">Hostel Category</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Mens Hostel - Selectable */}
                      <div 
                        onClick={() => {
                          setValue("category", "mens" as any);
                          setValue("branchId", "");
                        }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          watch("category") === "mens" 
                            ? "border-primary bg-primary/5 shadow-md" 
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                      >
                        <h3 className="font-bold text-lg text-center">Mens Hostel</h3>
                      </div>
                      
                      {/* Womens Hostel - Coming Soon */}
                      <div className="p-4 rounded-xl border-2 border-gray-200 bg-gray-50 relative overflow-hidden cursor-not-allowed opacity-60">
                        <div className="absolute top-1 right-1 z-10">
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-amber-900 rounded-full">
                            Coming Soon
                          </span>
                        </div>
                        <h3 className="font-bold text-lg text-center text-gray-400">Womens Hostel</h3>
                      </div>
                    </div>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-gray-700">Select Branch</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {filteredBranches.map((branch) => (
                         <div 
                          key={branch.id}
                          onClick={() => setValue("branchId", branch.id)}
                          className={`p-4 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                            watch("branchId") === branch.id 
                              ? "border-gold bg-gold/5 shadow-md" 
                              : "border-gray-200 hover:border-gold/50"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full mt-1 border-2 shrink-0 ${watch("branchId") === branch.id ? "border-gold bg-gold" : "border-gray-300"}`}></div>
                          <div>
                            <p className="font-bold text-gray-900">{branch.name.split(" - ")[1]}</p>
                            <p className="text-xs text-gray-500 line-clamp-1">{branch.address}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.branchId && <p className="text-red-500 text-sm mt-1">{errors.branchId.message}</p>}
                    {!category && <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200 inline-block mt-2">Select a category first to view branches.</p>}
                  </div>
                </div>
              )}

              {/* STEP 2: Preferences */}
              {step === 1 && (
                <div className="animate-fade-in space-y-8">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <BedDouble className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">Room Preferences</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700">Room Type <span className="text-red-500">*</span></label>
                      <select {...register("roomType")} className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none">
                        <option value="">Select Room Type</option>
                        <option value="AC">AC Room</option>
                        <option value="Non-AC">Non-AC Room</option>
                      </select>
                      {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType.message}</p>}
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700">Sharing Type <span className="text-red-500">*</span></label>
                      <select {...register("sharingType")} className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none">
                        <option value="">Select Occupancy</option>
                        <option value="2">2 Sharing</option>
                        <option value="3">3 Sharing</option>
                        <option value="4">4 Sharing</option>
                        <option value="5">5 Sharing</option>
                        <option value="6">6 Sharing (Budget)</option>
                      </select>
                      {errors.sharingType && <p className="text-red-500 text-sm">{errors.sharingType.message}</p>}
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-amber-500"/> Food Option <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        <label className="flex-1 flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 has-checked:bg-primary/5 has-checked:border-primary">
                          <input type="radio" value="With Food" {...register("foodOption")} className="w-4 h-4 text-primary" />
                          <span className="font-medium text-gray-700">With Food</span>
                        </label>
                        <label className="flex-1 flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 has-checked:bg-primary/5 has-checked:border-primary">
                          <input type="radio" value="Without Food" {...register("foodOption")} className="w-4 h-4 text-primary" />
                          <span className="font-medium text-gray-700">Room Only</span>
                        </label>
                      </div>
                      {errors.foodOption && <p className="text-red-500 text-sm">{errors.foodOption.message}</p>}
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-bold text-gray-700">Bunk Preference</label>
                      <select {...register("bunkPreference")} className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none">
                        <option value="Lower">Lower Bunk (Subject to availability)</option>
                        <option value="Upper">Upper Bunk</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Personal Details & Checkout */}
              {step === 2 && (
                <div className="animate-fade-in space-y-8">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <User className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">Personal Details</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                      <input {...register("name")} type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-gray-500 text-sm font-bold">+91</span>
                        <input {...register("phone")} type="tel" className="w-full h-12 px-4 rounded-r-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" placeholder="9876543210" />
                      </div>
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                      <input {...register("email")} type="email" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Move-in Date <span className="text-red-500">*</span></label>
                      <input {...register("moveInDate")} type="date" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none" />
                      {errors.moveInDate && <p className="text-red-500 text-sm">{errors.moveInDate.message}</p>}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-gray-700">I am a <span className="text-red-500">*</span></label>
                      <div className="flex flex-wrap gap-4">
                        {["Student", "Working Professional", "Job Seeker", "Other"].map((type) => (
                          <label key={type} className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 has-checked:bg-primary/5 has-checked:border-primary min-w-37.5">
                            <input type="radio" value={type} {...register("tenantType")} className="w-4 h-4 text-primary" />
                            <span className="font-medium text-gray-700 text-sm">{type}</span>
                          </label>
                        ))}
                      </div>
                      {errors.tenantType && <p className="text-red-500 text-sm">{errors.tenantType.message}</p>}
                    </div>

                    {/* Anti-Spam Honeypot (Invisible to humans, catches automated bots) */}
                    <input
                      {...register("botTrap")}
                      type="text"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                  </div>

                  {/* DPDP Act 2023 Mandatory Consent */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("dpdpConsent")}
                        className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-xs text-gray-700 leading-relaxed">
                        I give free, informed consent to Aishwaraya Hostels collecting and processing my details (Name, Phone, Email, Move-in Date) strictly for processing this hostel accommodation request in accordance with the{" "}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline">
                          Privacy Policy (DPDP Act 2023)
                        </a>{" "}
                        and{" "}
                        <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline">
                          Terms of Service
                        </a>.
                      </span>
                    </label>
                    {errors.dpdpConsent && (
                      <p className="text-red-500 text-xs mt-2 font-semibold" role="alert">
                        {errors.dpdpConsent.message}
                      </p>
                    )}
                  </div>
                  
                  {/* Simulated OTP Section as per specs */}
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-blue-900">Verification (Simulation)</h3>
                        <p className="text-sm text-blue-700">In production, an OTP would be sent to the phone number above.</p>
                      </div>
                      <Button type="button" variant="outline" size="sm" onClick={sendOtp} disabled={resendTimer > 0}>
                        {otpSent && resendTimer > 0 ? `Resend in ${resendTimer}s` : otpSent ? "Resend OTP" : "Send OTP"}
                      </Button>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter OTP"
                        value={otpCode}
                        onChange={(event) => setOtpCode(event.target.value)}
                        disabled={!otpSent || otpVerified}
                        className="h-10 px-4 rounded-lg border border-blue-200 bg-white text-blue-900 w-40"
                      />
                      <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        onClick={verifyOtp}
                        disabled={!otpSent || otpVerified}
                      >
                        Verify OTP
                      </Button>
                      {otpVerified && <Badge variant="success">Verified</Badge>}
                      {!otpVerified && otpSent && generatedOtp && (
                        <span className="text-xs text-blue-700">Demo OTP: {generatedOtp}</span>
                      )}
                    </div>
                    {otpError && <p className="text-sm text-red-600 mt-2">{otpError}</p>}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={prevStep}
                  className={step === 0 ? "invisible" : ""}
                >
                  Back
                </Button>
                
                {step < steps.length - 1 ? (
                  <Button type="button" variant="primary" onClick={nextStep} className="px-8">
                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" variant="gold" className="px-10" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Submit Booking Request"}
                  </Button>
                )}
              </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
}
