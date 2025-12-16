"use client"

import { LayoutDashboard, Calendar, FileText, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export type ViewType = "dashboard" | "calendar" | "applications" | "goals"

interface NavigationProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

export default function Navigation({
  currentView,
  onViewChange,
}: NavigationProps) {
  return (
    <header className="border-b bg-card">
      <nav className="flex gap-2 p-4">
        <Button onClick={() => onViewChange("dashboard")}>대시보드</Button>
        <Button onClick={() => onViewChange("calendar")}>캘린더</Button>
        <Button onClick={() => onViewChange("applications")}>입사지원</Button>
        <Button onClick={() => onViewChange("goals")}>목표</Button>
      </nav>
    </header>
  )
}
