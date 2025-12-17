"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Plus, Target, Calendar, TrendingUp } from "lucide-react"

interface Goal {
  id: string
  title: string
  type: "weekly" | "monthly"
  current: number
  target: number
  unit: string
}

export default function GoalsView() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: "1", title: "주간 학습 시간", type: "weekly", current: 18.5, target: 25, unit: "시간" },
    { id: "2", title: "주간 코딩테스트", type: "weekly", current: 12, target: 15, unit: "문제" },
    { id: "3", title: "월간 프로젝트 진행", type: "monthly", current: 2, target: 4, unit: "개" },
    { id: "4", title: "월간 지원서 제출", type: "monthly", current: 5, target: 10, unit: "건" },
  ])

  const [showAddForm, setShowAddForm] = useState(false)

  const weeklyGoals = goals.filter((g) => g.type === "weekly")
  const monthlyGoals = goals.filter((g) => g.type === "monthly")

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">주간 목표</p>
              <p className="text-3xl font-bold">2/4</p>
            </div>
            <div className="p-3 bg-primary/20 rounded-full">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
          </div>
          <Progress value={50} className="h-2 mb-2" />
          <p className="text-xs text-muted-foreground">이번 주 목표 달성률 50%</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-success/10 border-accent/20">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">월간 목표</p>
              <p className="text-3xl font-bold">1/4</p>
            </div>
            <div className="p-3 bg-accent/20 rounded-full">
              <Target className="h-6 w-6 text-accent" />
            </div>
          </div>
          <Progress value={25} className="h-2 mb-2" />
          <p className="text-xs text-muted-foreground">이번 달 목표 달성률 25%</p>
        </Card>
      </div>

      {/* Weekly Goals */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            주간 목표
          </h2>
          <Button size="sm" variant="outline" onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="h-4 w-4 mr-2" />새 목표
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {weeklyGoals.map((goal) => {
            const percentage = Math.min((goal.current / goal.target) * 100, 100)
            const isCompleted = goal.current >= goal.target
            return (
              <Card key={goal.id} className={`p-5 ${isCompleted ? "border-success/50 bg-success/5" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium">{goal.title}</h3>
                  {isCompleted && <span className="text-xl">✅</span>}
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{goal.current}</span>
                    <span className="text-sm text-muted-foreground">
                      / {goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress value={percentage} className={`h-2 ${isCompleted ? "[&>div]:bg-success" : ""}`} />
                  <p className="text-xs text-muted-foreground">
                    {isCompleted ? "목표 달성! 🎉" : `${(goal.target - goal.current).toFixed(1)} ${goal.unit} 남음`}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Monthly Goals */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-accent" />
          월간 목표
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {monthlyGoals.map((goal) => {
            const percentage = Math.min((goal.current / goal.target) * 100, 100)
            const isCompleted = goal.current >= goal.target
            return (
              <Card key={goal.id} className={`p-5 ${isCompleted ? "border-success/50 bg-success/5" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium">{goal.title}</h3>
                  {isCompleted && <span className="text-xl">✅</span>}
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{goal.current}</span>
                    <span className="text-sm text-muted-foreground">
                      / {goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress value={percentage} className={`h-2 ${isCompleted ? "[&>div]:bg-success" : ""}`} />
                  <p className="text-xs text-muted-foreground">
                    {isCompleted ? "목표 달성! 🎉" : `${goal.target - goal.current} ${goal.unit} 남음`}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Progress Insights */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          진행 상황 분석
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
            <span className="text-2xl">💪</span>
            <p className="text-sm">
              <span className="font-medium">좋아요!</span> 이번 주 학습 시간이 지난주보다 12% 증가했어요.
            </p>
          </div>
          <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
            <span className="text-2xl">🎯</span>
            <p className="text-sm">
              <span className="font-medium">목표 달성까지 조금 더!</span> 주간 코딩테스트 목표까지 3문제 남았어요.
            </p>
          </div>
          <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
            <span className="text-2xl">📈</span>
            <p className="text-sm">
              <span className="font-medium">꾸준함이 힘이에요!</span> 4일 연속으로 목표를 달성하고 있어요.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}