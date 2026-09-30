"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { branches } from "@/data/branches";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      branch: formData.get("branch") as string,
      message: formData.get("message") as string,
    };

    try {
      // Send to Google Sheets via API route
      const res = await fetch("/api/sheets?type=enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Failed to submit enquiry", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Badge variant="gold" className="mb-4">Get in Touch</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          We&apos;re Here to <span className="text-primary">Help</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our facilities, pricing, or availability? Drop us a message or visit any of our branches.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="h-full bg-primary-dark text-white border-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/50 font-medium mb-1">Call Us</h4>
                      <a href="tel:+919043456234" className="text-lg font-bold hover:text-gold transition-colors block">+91 90434 56234</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/50 font-medium mb-1">Email Us</h4>
                      <a href="mailto:aishwaryahostels@gmail.com" className="text-lg font-bold hover:text-gold transition-colors block break-all">
                        aishwaryahostels@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/50 font-medium mb-1">Head Office</h4>
                      <p className="text-base text-white/90 leading-relaxed">
                        W4CV+83H, Barathi Nagar,<br />
                        IOB Colony, Selaiyur,<br />
                        Chennai, Tamil Nadu 600073
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-sm text-white/50 font-medium mb-4">Follow Us</h4>
                  <a
                    href="https://www.instagram.com/Aishwarya_Hostels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group w-max"
                  >
                    {/* Instagram SVG Logo */}
                    <svg className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span className="text-sm font-medium text-white/90 group-hover:text-white">Aishwarya_Hostels</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-full border-gray-100 shadow-xl shadow-gray-200/50">
              <CardContent className="p-8 md:p-12">
                {success ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                      Thank you for contacting Aishwaraya Hostels. Our team will get back to you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setSuccess(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit phone number"
                            className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            placeholder="9043456234"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="branch" className="text-sm font-medium text-gray-700">Interested Branch (Optional)</label>
                        <select
                          id="branch"
                          name="branch"
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                        >
                          <option value="">Select a branch</option>
                          {branches.map(b => (
                            <option key={b.id} value={b.name.split(" - ")[1]}>{b.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>

                      <Button 
                        type="submit" 
                        variant="gold" 
                        size="lg" 
                        disabled={loading}
                        className="w-full group pt-2 pb-2"
                      >
                        {loading ? "Sending..." : (
                          <>
                            Send Message 
                            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Google Maps Embed pointing to HQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d80.1436!3d12.8685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a0d13d45d0d%3A0x0!2sW4CV%2B83H%2C%20Barathi%20Nagar%2C%20IOB%20Colony%2C%20Selaiyur%2C%20Chennai%2C%20Tamil%20Nadu%20600073!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aishwaraya Hostels Head Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
