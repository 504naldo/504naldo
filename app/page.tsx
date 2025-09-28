'use client';

import { Progress } from "@/components/ui/progress";
import { Calendar, FileText, ClipboardList, DollarSign, Users, CheckCircle, Home } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Home className="shrink-0" />
          <div className="flex-1">
            <h1 className="text-base font-semibold">Westwater Renovation</h1>
            <p className="text-xs text-gray-500">Contractor Dashboard</p>
          </div>
          <span className="text-xs text-gray-600">65%</span>
        </div>
        <div className="max-w-md mx-auto px-4 pb-3">
          <Progress value={65} className="h-2" />
        </div>
      </div>

      {/* Simple Content */}
      <main className="max-w-md mx-auto p-4 space-y-4">
        <div className="p-4 rounded-xl border shadow">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="text-blue-600" />
            <h3 className="font-semibold">Schedule</h3>
          </div>
          <p className="text-sm text-gray-600">Next milestone: Electrical inspection</p>
        </div>

        <div className="p-4 rounded-xl border shadow">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="text-green-600" />
            <h3 className="font-semibold">Documents</h3>
          </div>
          <p className="text-sm text-gray-600">Upload permits, drawings, and more.</p>
        </div>
      </main>
    </div>
  );
}