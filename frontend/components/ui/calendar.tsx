"use client"

import { Calendar, LayoutDashboard, Target, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentView: "calendar" | "dashboard" | "goals" | "applications"
  onViewChange: (view: "calendar" | "dashboard" | "goals" | "applications") => void
}

export default function CalendarView({ currentView, onViewChange }: NavigationProps) {
  return (
    <header className="border-b border-border/50 bg-card shadow-md">
      <div className="container mx-auto px-4 py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              DevRoutine
            </h1>
            <p className="text-sm text-muted-foreground font-medium">취준생들의 일정관리를 위한</p>
          </div>
          <nav className="flex gap-2">
            <Button
              variant={currentView === "dashboard" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("dashboard")}
              className={`gap-2 transition-all ${
                currentView === "dashboard"
                  ? "shadow-lg bg-gradient-to-br from-primary to-accent"
                  : "hover:bg-primary/10"
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className="font-medium">대시보드</span>
            </Button>
            <Button
              variant={currentView === "calendar" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("calendar")}
              className={`gap-2 transition-all ${
                currentView === "calendar"
                  ? "shadow-lg bg-gradient-to-br from-primary to-accent"
                  : "hover:bg-primary/10"
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span className="font-medium">캘린더</span>
            </Button>
            <Button
              variant={currentView === "applications" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("applications")}
              className={`gap-2 transition-all ${
                currentView === "applications"
                  ? "shadow-lg bg-gradient-to-br from-primary to-accent"
                  : "hover:bg-primary/10"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span className="font-medium">입사 지원</span>
            </Button>
            <Button
              variant={currentView === "goals" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("goals")}
              className={`gap-2 transition-all ${
                currentView === "goals" ? "shadow-lg bg-gradient-to-br from-primary to-accent" : "hover:bg-primary/10"
              }`}
            >
              <Target className="h-4 w-4" />
              <span className="font-medium">목표</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
