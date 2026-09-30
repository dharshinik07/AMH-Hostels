"use client";

import { useState, useEffect } from "react";
import { 
  Building2, 
  BedDouble, 
  Users, 
  CalendarCheck, 
  TrendingUp, 
  Activity,
  ArrowRight,
  IndianRupee
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { getBranches, getRooms, getBeds } from "@/lib/api";
import { branches as mockBranches } from "@/data/branches";
import { beds as mockBeds } from "@/data/beds";
import { tenants as mockTenants } from "@/data/tenants";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function AdminOverview() {
  const [stats, setStats] = useState({
    totalBranches: mockBranches.length,
    totalBeds: mockBranches.reduce((acc, curr) => acc + curr.totalBeds, 0),
    occupiedBeds: mockBranches.reduce((acc, curr) => acc + curr.occupiedBeds, 0),
    totalTenants: mockTenants.length,
    monthlyRevenue: 1250000, // Mock data
    pendingBookings: 12,     // Mock data
  });

  const occupancyRate = Math.round((stats.occupiedBeds / stats.totalBeds) * 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back. Here's what's happening across all branches today.</p>
        </div>
        <Badge variant="success" className="h-8 px-4 border-none bg-green-100 text-green-800 shadow-sm">
          <Activity className="w-3 h-3 mr-2 animate-pulse" /> Live Stats
        </Badge>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Total Branches</p>
                <h3 className="text-3xl font-bold text-gray-900">{stats.totalBranches}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500 font-medium flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +1
              </span>
              <span className="text-gray-400 ml-2">New branch this year</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Occupancy Rate</p>
                <h3 className="text-3xl font-bold text-gray-900">{occupancyRate}%</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <BedDouble className="w-6 h-6" />
              </div>
            </div>
            
            <div className="mt-4">
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1 overflow-hidden pointer-events-none">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${occupancyRate}%` }}></div>
              </div>
              <p className="text-xs text-gray-500 text-right">{stats.occupiedBeds} / {stats.totalBeds} Beds</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Active Tenants</p>
                <h3 className="text-3xl font-bold text-gray-900">{stats.totalTenants}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <Link href="/admin/dashboard/tenants" className="text-amber-600 font-medium flex items-center hover:text-amber-700 transition-colors pointer-events-auto">
                View Directory <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-primary-dark to-primary text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-white/70 mb-1">Monthly Revenue</p>
                <h3 className="text-2xl lg:text-3xl font-bold">{formatCurrency(stats.monthlyRevenue)}</h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                <IndianRupee className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-400 font-medium flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
              </span>
              <span className="text-white/50 ml-2">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Branch Performance */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-md bg-white overflow-hidden">
            <div className="border-b border-gray-100 p-6 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900">Branch Performance</h3>
              <Link href="/admin/dashboard/branches" className="text-sm font-medium text-primary hover:text-primary-dark flex items-center gap-1 transition-colors pointer-events-auto">
                All Branches <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <CardContent className="p-0">
              <div className="overflow-x-auto pointer-events-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                      <th className="p-4 font-bold border-b border-gray-100">Branch Name</th>
                      <th className="p-4 font-bold border-b border-gray-100">Category</th>
                      <th className="p-4 font-bold border-b border-gray-100">Occupancy</th>
                      <th className="p-4 font-bold border-b border-gray-100">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {mockBranches.slice(0, 5).map((branch) => {
                      const occRate = Math.round((branch.occupiedBeds / branch.totalBeds) * 100);
                      return (
                        <tr key={branch.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-4">
                            <p className="font-bold text-gray-900">{branch.name.split(" - ")[1]}</p>
                            <p className="text-xs text-gray-500">{branch.totalRooms} Rooms</p>
                          </td>
                          <td className="p-4">
                            <Badge variant={branch.category === "mens" ? "primary" : "secondary"} className="text-xs">
                              {branch.category}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-gray-200 rounded-full h-1.5 w-16 pointer-events-none overflow-hidden">
                                <div 
                                  className={`h-1.5 rounded-full ${occRate > 90 ? 'bg-green-500' : occRate > 70 ? 'bg-amber-500' : 'bg-red-500'}`} 
                                  style={{ width: `${occRate}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">{occRate}%</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant={occRate > 90 ? "success" : "warning"} className="text-[10px] sm:text-xs">
                              {occRate > 90 ? "Optimal" : "Needs Attention"}
                            </Badge>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items & Quick Links */}
        <div className="space-y-6">
          <Card className="border-none shadow-md bg-white hidden xl:block pointer-events-auto">
            <div className="border-b border-gray-100 p-6 flex flex-col justify-center text-center bg-gray-50/50">
                <CalendarCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-900">{stats.pendingBookings}</h3>
                <p className="text-sm text-gray-500">Pending Booking Requests</p>
                <Link href="/admin/dashboard/bookings" className="mt-4 text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors py-2 rounded-xl">
                  Review Bookings
                </Link>
            </div>
          </Card>

           <Card className="border-none shadow-md bg-white">
            <div className="border-b border-gray-100 p-6 bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-900">Recent Activity</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6 pointer-events-none">
                {[
                  { title: "New Booking Request", desc: "Rahul K. needs a 2-sharing AC room at Selaiyur.", time: "10 mins ago", color: "bg-blue-100 text-blue-600" },
                  { title: "Payment Received", desc: "₹8,500 from Priya for Tambaram Womens Hostel.", time: "1 hour ago", color: "bg-green-100 text-green-600" },
                  { title: "Maintenance Request", desc: "AC not cooling in Room 204, Camp Road.", time: "2 hours ago", color: "bg-amber-100 text-amber-600" },
                  { title: "Tenant Checkout", desc: "Vikram moving out today (End of notice).", time: "5 hours ago", color: "bg-gray-100 text-gray-600" },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${activity.color}`}>
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-1">{activity.desc}</p>
                      <p className="text-[10px] text-gray-400 mt-1 font-medium">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
