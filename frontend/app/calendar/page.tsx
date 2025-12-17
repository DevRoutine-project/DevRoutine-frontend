// "use client"

// import { useState } from "react"
// import Navigation, { ViewType } from "@/components/ui/layouts/navigation"
// import CalendarContent from "@/components/ui/calendar/calendarContent"
// import DashboardView from "@/components/ui/dashboard"
// import ApplicationsView from "@/components/ui/applications"
// import GoalsView from "@/components/ui/goal"

// export default function CalendarPage() {
//   const [currentView, setCurrentView] = useState<ViewType>("dashboard")

//   return (
//     <>
//       <Navigation
//         currentView={currentView}
//         onViewChange={setCurrentView}
//       />

//       <main className="p-6">
//         {currentView === "dashboard" && <DashboardView />}
//         {currentView === "calendar" && <CalendarContent />}
//         {currentView === "applications" && <ApplicationsView />}
//         {currentView === "goals" && <GoalsView /> }
//       </main>
//     </>
//   )
// }

import CalendarView from "@/components/ui/calendar/calendarContent"

export default function CalendarPage() {
  return <CalendarView />
}
