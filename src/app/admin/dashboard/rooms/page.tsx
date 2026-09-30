import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { rooms } from "@/data/rooms";
import { branches } from "@/data/branches";
import { Button } from "@/components/ui/Button";
import { Plus, Filter, Search } from "lucide-react";

export default function AdminRooms() {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rooms & Beds</h1>
          <p className="text-gray-500 mt-1">Detailed view of room allocation and status.</p>
        </div>
        <Button variant="primary" className="gap-2 shrink-0 shadow-sm">
          <Plus className="w-4 h-4" /> Add Room Block
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search room number..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <select className="border border-gray-200 rounded-xl px-4 py-2 bg-gray-50 outline-none text-sm font-medium min-w-[150px]">
            <option value="">All Branches</option>
            {branches.map(b => <option key={b.id} value={b.id}>{b.name.split(" - ")[1]}</option>)}
          </select>
          <select className="border border-gray-200 rounded-xl px-4 py-2 bg-gray-50 outline-none text-sm font-medium min-w-[120px]">
            <option value="">Any Status</option>
            <option value="available">Available</option>
            <option value="full">Full</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {rooms.map(room => {
          const branch = branches.find(b => b.id === room.branchId);
          // Calculate availability artificially for UI demo
          const totalBeds = room.sharingType;
          const mockOccupied = Math.floor(Math.random() * (totalBeds + 1)); 
          const isFull = mockOccupied === totalBeds;

          return (
            <Card key={room.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white pointer-events-auto cursor-pointer group">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${isFull ? 'bg-gray-100 text-gray-500' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors'}`}>
                       {room.roomNumber}
                     </div>
                     <div>
                       <Badge variant={room.roomType === "AC" ? "default" : "secondary"} className="text-[10px] px-1.5 py-0 mb-1 border-none shadow-none">{room.roomType}</Badge>
                       <p className="text-xs text-gray-500 font-medium truncate w-24">{branch?.name.split(" - ")[1]}</p>
                     </div>
                   </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sharing</span>
                    <span className="font-medium text-gray-900">{room.sharingType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Floor</span>
                    <span className="font-medium text-gray-900">{room.floor}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500 font-bold uppercase">Occupancy</span>
                      <span className="text-xs font-medium text-gray-900">{mockOccupied}/{totalBeds} Beds</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-1.5 rounded-full ${isFull ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${(mockOccupied / totalBeds) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
