"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, Mail, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { setAdminSession } from "@/lib/storage";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@aishwarya.com",
      password: "admin123", // Pre-filled for demo convenience
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setAdminSession(result.token, result.user);
        router.push("/admin/dashboard");
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      {/* Hide the main navbar/footer for the login page by covering it or forcing full height */}
      <div className="fixed inset-0 bg-primary-dark z-50 flex flex-col md:flex-row">
        
        {/* Left Side: Branding (Hidden on mobile) */}
        <div className="hidden md:flex flex-col flex-1 items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10"></div>
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
          
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Aishwaraya<br/><span className="text-gold">Admin Portal</span></h1>
            <p className="text-xl text-white/70 max-w-md">Manage branches, branches, bookings, and resident information.</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12 bg-surface rounded-t-[3rem] md:rounded-l-[3rem] md:rounded-tr-none shadow-2xl z-20">
          <div className="w-full max-w-md">
            <div className="text-center mb-10 md:hidden">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Aishwaraya Admin</h1>
              <p className="text-gray-500">Sign in to management portal</p>
            </div>

            <Card className="border-gray-100 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <ShieldAlert className="w-6 h-6 text-primary" /> Secure Login
                </h2>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-start gap-3 animate-fade-in">
                    <ShieldAlert className="w-5 h-5 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Admin Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="admin@aishwarya.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">Password</label>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register("password")}
                        type="password"
                        className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                  </div>

                  <Button type="submit" variant="primary" className="w-full h-12" disabled={isLoading}>
                    {isLoading ? "Authenticating..." : "Sign In to Dashboard"}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400">
                    Protected by Aishwaraya Hostels Internal Security. Unauthorized access is strictly prohibited.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
