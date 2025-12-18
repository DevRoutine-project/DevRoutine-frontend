"use client"

import { useState } from "react"
import { CalendarDays, CheckCircle2, Circle, ChevronLeft, ChevronRight,} from "lucide-react"
import { Button } from "@/components/ui/common/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

/* ------------------ 더미 데이터 ------------------ */
const routines = [
  { id: 1, title: "CS 공부", completed: true, icon: "💻" },
  { id: 2, title: "코딩테스트", completed: true, icon: "⌨️" },
  { id: 3, title: "자기소개서 작성", completed: false, icon: "📝" },
  { id: 4, title: "알고리즘 문제풀이", completed: false, icon: "🧩" },
]

const motivationMessage =
  "이번 주도 잘 해냈어요. 계속 나아가세요! 💪"

/* ================================================= */

export default function CalendarContent() {
  const today = new Date()

  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())

  const [events, setEvents] = useState<
    Record<string, { title: string; color: string }[]>
  >({})

  const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  const todayEvents = events[todayKey] || []

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newColor, setNewColor] = useState("#7886C7")
  const [modalStep, setModalStep] =
    useState<"type" | "basic" | "todo">("type")

  function dateKey(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  }

  function isSameDate(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    )
  }

  const openModal = (date: Date) => {
    setSelectedDate(date)
    setModalStep("type")
    setIsModalOpen(true)
  }

  const saveEvent = () => {
    if (!selectedDate || !newTitle.trim()) return

    const key = dateKey(selectedDate)

    setEvents((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), { title: newTitle, color: newColor }],
    }))

    setNewTitle("")
    setNewColor("#7886C7")
    setIsModalOpen(false)
  }

  /* ------------------ 캘린더 계산 ------------------ */
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)

  const startWeekday = firstDay.getDay()
  const totalDays = lastDay.getDate()
  const prevLast = new Date(currentYear, currentMonth, 0).getDate()

  let days: { date: Date; currentMonth: boolean }[] = []

  for (let i = startWeekday - 1; i >= 0; i--) {
    days.push({
      date: new Date(currentYear, currentMonth - 1, prevLast - i),
      currentMonth: false,
    })
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push({
      date: new Date(currentYear, currentMonth, i),
      currentMonth: true,
    })
  }

  while (days.length < 42) {
    const nextIndex = days.length - (startWeekday + totalDays) + 1
    days.push({
      date: new Date(currentYear, currentMonth + 1, nextIndex),
      currentMonth: false,
    })
  }

  const goPrevMonth = () => {
    setCurrentMonth((m) => {
      if (m === 0) {
        setCurrentYear((y) => y - 1)
        return 11
      }
      return m - 1
    })
  }

  const goNextMonth = () => {
    setCurrentMonth((m) => {
      if (m === 11) {
        setCurrentYear((y) => y + 1)
        return 0
      }
      return m + 1
    })
  }

  /* ======================= UI ======================= */
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      {/* 캘린더 */}
      <Card className="rounded-3xl p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={goPrevMonth}>
              <ChevronLeft />
            </button>
            <h2 className="text-2xl font-bold">
              {currentYear}년 {currentMonth + 1}월
            </h2>
            <button onClick={goNextMonth}>
              <ChevronRight />
            </button>
          </div>
          <CalendarDays />
        </div>

        <div className="mb-4 grid grid-cols-7 text-center text-sm">
          {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map(({ date, currentMonth }, idx) => {
            const isToday = isSameDate(date, today)
            const key = dateKey(date)
            const dayEvents = events[key] || []

            return (
              <div
                key={idx}
                onClick={() => currentMonth && openModal(date)}
                className={cn(
                  "h-20 rounded-xl p-2 cursor-pointer",
                  currentMonth ? "" : "opacity-40",
                  isToday && "bg-primary text-white"
                )}
              >
                <div className="text-sm">{date.getDate()}</div>
                {dayEvents.map((ev, i) => (
                  <div
                    key={i}
                    className="mt-1 truncate rounded bg-primary px-1 text-xs text-white"
                  >
                    {ev.title}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </Card>

      {/* 사이드 */}
      <div className="space-y-4">
        <Card className="p-5">
          <h3 className="font-bold mb-2">오늘 일정</h3>
          {todayEvents.length === 0
            ? "없음"
            : todayEvents.map((e, i) => <div key={i}>{e.title}</div>)}
        </Card>

        <Card className="p-5">
          <h3 className="font-bold mb-2">오늘의 업무</h3>
          {routines.map((r) => (
            <div key={r.id} className="flex items-center gap-2">
              {r.completed ? <CheckCircle2 /> : <Circle />}
              {r.title}
            </div>
          ))}
        </Card>

        <Card className="p-5">{motivationMessage}</Card>
      </div>

      {/* 모달 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>일정 추가</DialogTitle>
          </DialogHeader>

          <input
            className="border p-2"
            placeholder="제목"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <DialogFooter>
            <Button onClick={saveEvent}>저장</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}