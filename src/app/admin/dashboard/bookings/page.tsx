"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, Filter, CheckCircle2, XCircle, Clock, MapPin, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Booking } from "@/types";
import { branches } from "@/data/branches";

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch bookings from our API Route
    fetch("/api/bookings")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // Sort newest first
          const sorted = data.data.sort((a: Booking, b: Booking) => 
             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setBookings(sorted);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Confirmed": return <Badge variant="success" className="shadow-none border-none"><CheckCircle2 className="w-3 h-3 mr-1"/> Confirmed</Badge>;
      case "Cancelled": return <Badge variant="warning" className="shadow-none border-none bg-red-100 text-red-700"><XCircle className="w-3 h-3 mr-1"/> Cancelled</Badge>;
      default: return <Badge variant="secondary" className="shadow-none border-none"><Clock className="w-3 h-3 mr-1"/> Pending Approval</Badge>;
    }
  };

  return (
    <div className="animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Booking Requests</h1>
          <p className="text-gray-500 mt-1">Review and manage new admission requests from the website.</p>
        </div>
        <Button variant="outline" className="gap-2 shrink-0 bg-white">
          Download Report
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search bookings by name or phone..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <select className="border border-gray-200 rounded-xl px-4 py-2 bg-gray-50 outline-none text-sm font-medium min-w-[150px]">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Loading booking requests...</p>
        </div>
      ) : bookings.length === 0 ? (
        <Card className="border-dashed border-2 shadow-none bg-gray-50/50">
          <CardContent className="p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100 text-gray-400">
               <CalendarCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Bookings Found</h3>
            <p className="text-gray-500 max-w-sm">There are currently no booking requests in the system. When a user submits the booking form, it will appear here.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {bookings.map((booking) => {
            const branch = branches.find(b => b.id === booking.branchId);
            const isPending = booking.status === "Pending";

            return (
               <Card key={booking.id} className="border-none shadow-md overflow-hidden bg-white pointer-events-auto group">
                <div className={`h-2 w-full ${isPending ? 'bg-gold' : 'bg-green-500'}`}></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900">{booking.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                         <span className="w-2 relative">
                           {booking.tenantType === "Student" ? "🎓" : "💼"}
                         </span>
                         {booking.tenantType}
                      </p>
                    </div>
                    {getStatusBadge(booking.status)}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-bold text-sm text-gray-900 line-clamp-1">
                         {booking.category.toUpperCase()} • {branch?.name.split(" - ")[1]}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Room Preference</p>
                        <p className="font-medium text-gray-900">{booking.roomType} • {booking.sharingType} Share</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Move-In Date</p>
                        <p className="font-medium text-gray-900">{new Date(booking.moveInDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Food</p>
                        <p className="font-medium text-gray-900">{booking.foodOption}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Bunk</p>
                        <p className="font-medium text-gray-900">{booking.bunkPreference}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm flex justify-between">
                      <span className="text-gray-500">Phone:</span>
                      <a href={`tel:${booking.phone}`} className="font-bold text-primary hover:underline">{booking.phone}</a>
                    </p>
                    {booking.email && (
                      <p className="text-sm flex justify-between">
                        <span className="text-gray-500">Email:</span>
                        <a href={`mailto:${booking.email}`} className="font-medium text-gray-900 hover:text-primary truncate ml-2 max-w-[160px]">{booking.email}</a>
                      </p>
                    )}
                  </div>

                  {isPending ? (
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 mt-auto">
                      <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300">
                        Decline
                      </Button>
                      <Button variant="primary" size="sm" className="bg-green-600 hover:bg-green-700">
                        Confirm Allocation
                      </Button>
                    </div>
                  ) : (
                     <div className="pt-4 border-t border-gray-100 mt-auto">
                        <Button variant="outline" size="sm" fullWidth className="bg-gray-50 text-gray-600">
                          View details
                        </Button>
                     </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  );
}
