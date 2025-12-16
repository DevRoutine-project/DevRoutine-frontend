"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Clock, CheckCircle2, Target } from "lucide-react"

export function DashboardView() {
  const stats = [
    { label: "완료한 태스크", value: "24", change: "+12%", icon: CheckCircle2, color: "text-success" },
    { label: "학습 시간", value: "18.5시간", change: "+8%", icon: Clock, color: "text-primary" },
    { label: "목표 달성률", value: "75%", change: "+5%", icon: Target, color: "text-accent" },
    { label: "연속 일수", value: "4일", change: "🔥", icon: TrendingUp, color: "text-chart-4" },
  ]

  const weeklyData = [
    { day: "월", hours: 3.5, tasks: 5 },
    { day: "화", hours: 4.2, tasks: 6 },
    { day: "수", hours: 2.8, tasks: 4 },
    { day: "목", hours: 4.0, tasks: 5 },
    { day: "금", hours: 3.8, tasks: 6 },
    { day: "토", hours: 0.2, tasks: 1 },
    { day: "일", hours: 0, tasks: 0 },
  ]

  const categories = [
    { name: "CS 공부", hours: 6.5, percentage: 35, color: "bg-chart-1" },
    { name: "코딩테스트", hours: 5.2, percentage: 28, color: "bg-chart-2" },
    { name: "프로젝트", hours: 4.8, percentage: 26, color: "bg-chart-3" },
    { name: "자기소개서", hours: 2.0, percentage: 11, color: "bg-chart-4" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-5 shadow-lg border-border/50 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.change} 지난주 대비</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg border-border/50">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            주간 활동
          </h3>
          <div className="space-y-5">
            {weeklyData.map((data) => (
              <div key={data.day} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold">{data.day}요일</span>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="text-xs">{data.tasks}개 완료</span>
                    <span className="font-bold text-foreground text-base">{data.hours}h</span>
                  </div>
                </div>
                <Progress value={(data.hours / 5) * 100} className="h-2.5" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-lg border-border/50">
          <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
            카테고리별 시간
          </h3>
          <div className="space-y-5">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold">{category.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-medium">{category.percentage}%</span>
                    <span className="font-bold text-foreground text-base w-16 text-right">{category.hours}h</span>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full ${category.color} transition-all duration-500 rounded-full`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 shadow-lg border-border/50">
        <h3 className="font-bold text-xl mb-5 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
          최근 활동
        </h3>
        <div className="space-y-1">
          {[
            { time: "2시간 전", action: "CS 공부 완료", duration: "1.5시간" },
            { time: "4시간 전", action: "알고리즘 문제 3개 해결", duration: "2시간" },
            { time: "어제", action: "자기소개서 작성 완료", duration: "1시간" },
            { time: "어제", action: "코딩테스트 연습", duration: "2.5시간" },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-accent/10 transition-colors border-b last:border-0"
            >
              <div>
                <p className="text-sm font-semibold">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <span className="text-sm font-medium text-primary">{activity.duration}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
