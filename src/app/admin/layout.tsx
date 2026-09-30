"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdminSession } from "@/lib/storage";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Basic client-side auth check
    const session = getAdminSession();
    if (!session) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 
        This is a simplified layout. 
        In a full implementation, you'd have a Sidebar component here 
        and the content would be on the right. 
      */}
      <div className="flex-1 w-full">
        {children}
      </div>
    </div>
  );
}
