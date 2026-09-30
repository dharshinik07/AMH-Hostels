"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, Mail, Phone, Calendar, MessageSquare, Reply } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Enquiry } from "@/types";

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/enquiries")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const sorted = data.data.sort((a: Enquiry, b: Enquiry) => 
             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setEnquiries(sorted);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Enquiries & Messages</h1>
          <p className="text-gray-500 mt-1">Respond to questions from prospective residents.</p>
        </div>
      </div>

       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 relative">
          <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search messages..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white text-sm"
          />
      </div>

      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-4">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Loading messages...</p>
        </div>
      ) : enquiries.length === 0 ? (
        <Card className="border-dashed border-2 shadow-none bg-gray-50/50">
          <CardContent className="p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100 text-gray-400">
               <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inbox Empty</h3>
            <p className="text-gray-500 max-w-sm">No enquiries received yet. Messages submitted through the contact page will appear here.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {enquiries.map((enquiry) => (
            <Card key={enquiry.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white pointer-events-auto">
              <CardContent className="p-0 sm:flex">
                <div className="p-5 sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-100 bg-gray-50/30">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{enquiry.name}</h3>
                    <Badge variant="warning" className="text-[10px] shadow-none bg-amber-100 text-amber-800">New</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <a href={`tel:${enquiry.phone}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors">
                      <div className="w-7 h-7 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                        <Phone className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{enquiry.phone}</span>
                    </a>
                    
                    {enquiry.email && (
                      <a href={`mailto:${enquiry.email}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors truncate">
                        <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <Mail className="w-3 h-3" />
                        </div>
                        <span className="truncate">{enquiry.email}</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-5 sm:w-2/3 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-bold text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> 
                      {new Date(enquiry.createdAt).toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 flex-1 mb-4 border border-gray-100/50">
                    <p className="text-gray-700 text-sm italic leading-relaxed whitespace-pre-wrap flex items-start gap-2">
                      <span className="text-4xl text-gray-300 leading-none h-6 block leading-[0.5] font-serif">"</span>
                      {enquiry.message}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 justify-end mt-auto">
                    <Button variant="outline" size="sm" className="text-xs">Mark as Read</Button>
                    <a href={`https://wa.me/91${enquiry.phone}?text=Hello ${enquiry.name}, we received your enquiry at Aishwaraya Hostels...`} target="_blank">
                      <Button variant="primary" size="sm" className="gap-2 bg-[#25D366] hover:bg-[#128C7E] border-none shadow-sm text-xs">
                        <Reply className="w-3 h-3" /> Reply on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
