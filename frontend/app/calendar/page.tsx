"use client"

import { useState } from "react"
import CalendarView from "@/components/ui/calendar"
import { DashboardView } from "@/components/ui/dashboard"
import { ApplicationsView } from "@/components/ui/applications"

type ViewType = "dashboard" | "calendar" | "applications" | "goals"

export default function CalendarPage() {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard")

  return (
    <div>
      <CalendarView
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      <main className="p-6">
        {currentView === "dashboard" && <DashboardView />}
        {currentView === "applications" && <ApplicationsView />}

        {/* 아직 없으니까 임시 */}
        {currentView === "calendar" && <div>캘린더 준비중</div>}
        {currentView === "goals" && <div>목표 준비중</div>}
      </main>
    </div>
  )
}
