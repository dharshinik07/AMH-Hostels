import { getBranches } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, Building2, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

// This would typically fetch fresh data server-side or via SWR
import { branches } from "@/data/branches";

export default function AdminBranches() {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Branch Management</h1>
          <p className="text-gray-500 mt-1">Manage and monitor all your PG locations.</p>
        </div>
        <Button variant="primary" className="gap-2 shrink-0 shadow-sm">
          <Plus className="w-4 h-4" /> Add New Branch
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map(branch => {
           const available = branch.totalBeds - branch.occupiedBeds;
           return (
            <Card key={branch.id} className="border-none shadow-md hover:shadow-lg transition-all bg-white overflow-hidden group">
              <div className="h-32 bg-gray-100 relative overflow-hidden">
                <div className={`absolute inset-0 opacity-20 ${branch.category === 'mens' ? 'bg-primary' : 'bg-purple-600'}`}></div>
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <Badge variant={branch.category === 'mens' ? "primary" : "secondary"} className="shadow-sm">
                    {branch.category}
                  </Badge>
                </div>
                <Building2 className="absolute -bottom-4 -left-4 w-24 h-24 text-black/10 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6 relative">
                 {/* Floating Avatar/Icon */}
                 <div className="absolute -top-10 left-6 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center p-1 border-4 border-white">
                   <div className={`w-full h-full rounded-xl flex items-center justify-center text-white font-bold text-lg ${branch.category === 'mens' ? 'gradient-primary' : 'bg-gradient-to-br from-purple-500 to-indigo-600'}`}>
                     {branch.name.split(" - ")[1].charAt(0)}
                   </div>
                 </div>

                 <div className="pt-8">
                   <h3 className="text-xl font-bold text-gray-900 mb-1">{branch.name.split(" - ")[1]}</h3>
                   <div className="flex items-start gap-2 text-gray-500 text-xs mb-4">
                     <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                     <span className="line-clamp-2">{branch.address}</span>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 mb-4">
                     <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Rooms</p>
                       <p className="font-medium text-gray-900">{branch.totalRooms}</p>
                     </div>
                     <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Total Beds</p>
                       <p className="font-medium text-gray-900">{branch.totalBeds}</p>
                     </div>
                     <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Available</p>
                       <Badge variant={available < 10 ? "warning" : "success"} className="px-2 py-0 border-none shadow-none text-xs">
                         {available}
                       </Badge>
                     </div>
                     <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Contact</p>
                       <p className="font-medium text-gray-900 text-xs truncate" title={branch.phone}>{branch.phone}</p>
                     </div>
                   </div>

                   <Button variant="outline" size="sm" fullWidth className="text-xs font-bold border-gray-200 text-gray-700 hover:bg-gray-50">
                     Manage Building
                   </Button>
                 </div>
              </CardContent>
            </Card>
           )
        })}
      </div>
    </div>
  );
}
