import { tenants } from "@/data/tenants";
import { branches } from "@/data/branches";
import { rooms } from "@/data/rooms";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, Filter, Mail, Phone, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminTenants() {
  return (
    <div className="animate-fade-in">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tenant Directory</h1>
          <p className="text-gray-500 mt-1">Manage active residents, their details, and payments.</p>
        </div>
        <Button variant="primary" className="gap-2 shrink-0 shadow-sm">
          Export Directory
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name, phone, or email..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
           <Button variant="outline" className="gap-2 bg-gray-50 text-gray-600 border-gray-200">
             <Filter className="w-4 h-4" /> Filters
           </Button>
        </div>
      </div>

      <Card className="border-none shadow-md overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold border-b border-gray-100">Tenant Name</th>
                <th className="p-4 font-bold border-b border-gray-100">Contact Info</th>
                <th className="p-4 font-bold border-b border-gray-100">Location</th>
                <th className="p-4 font-bold border-b border-gray-100">Status</th>
                <th className="p-4 font-bold border-b border-gray-100 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tenants.map(tenant => {
                const branch = branches.find(b => b.id === tenant.branchId);
                const room = rooms.find(r => r.id === tenant.roomId);

                return (
                  <tr key={tenant.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 flex flex-shrink-0 items-center justify-center font-bold text-gray-500 shadow-sm">
                          {tenant.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{tenant.name}</p>
                          <p className="text-xs text-gray-500">{tenant.tenantType}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <a href={`tel:${tenant.phone}`} className="flex items-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors hover:underline">
                          <Phone className="w-3 h-3 text-gray-400" /> {tenant.phone}
                        </a>
                        <a href={`mailto:${tenant.email}`} className="flex items-center gap-1 text-xs text-gray-600 hover:text-primary transition-colors hover:underline truncate w-40">
                          <Mail className="w-3 h-3 text-gray-400" /> {tenant.email}
                        </a>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="border-gray-200 text-xs shadow-none">Room {room?.roomNumber}</Badge>
                        <span className="text-xs font-bold text-gray-700">{tenant.bedId}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate w-32">{branch?.name.split(" - ")[1]}</p>
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant={tenant.status === 'Active' ? 'success' : tenant.status === 'Notice Period' ? 'warning' : 'default'}
                        className="shadow-none border-none text-[10px] sm:text-xs"
                      >
                        {tenant.status}
                      </Badge>
                      <p className="text-[10px] text-gray-400 mt-1">Joined: {new Date(tenant.moveInDate).toLocaleDateString()}</p>
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors pointer-events-auto">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
          <p className="text-xs text-gray-500">Showing {tenants.length} tenants</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-400 cursor-not-allowed">Prev</button>
            <button className="px-3 py-1 rounded-md text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-sm pointer-events-auto">1</button>
            <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-100 pointer-events-auto">Next</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
