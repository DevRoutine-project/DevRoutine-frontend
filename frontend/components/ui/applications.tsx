"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, ExternalLink, Star, StarOff } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ApplicationStatus = "지원 전" | "서류제출" | "코테" | "1차 면접" | "2차 면접" | "최종 면접" | "합격" | "불합격"
type InterestLevel = "high" | "medium" | "low"

interface Application {
  id: string
  company: string
  position: string
  link: string
  deadline: string
  jobType: string
  stage: ApplicationStatus
  testType: string
  interest: InterestLevel
  appliedDate?: string
  notes?: string
}

export function ApplicationsView() {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: "1",
      company: "네이버",
      position: "프론트엔드 개발자",
      link: "https://careers.naver.com",
      deadline: "2025-12-20",
      jobType: "신입",
      stage: "서류제출",
      testType: "코테 + 기술면접",
      interest: "high",
      appliedDate: "2025-12-01",
    },
    {
      id: "2",
      company: "카카오",
      position: "백엔드 개발자",
      link: "https://careers.kakao.com",
      deadline: "2025-12-25",
      jobType: "경력/신입",
      stage: "코테",
      testType: "코테 + 1차 면접",
      interest: "high",
      appliedDate: "2025-12-05",
    },
    {
      id: "3",
      company: "토스",
      position: "풀스택 개발자",
      link: "https://toss.im/career",
      deadline: "2025-12-30",
      jobType: "신입",
      stage: "지원 전",
      testType: "코테 + 기술면접 + 컬쳐핏",
      interest: "medium",
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)

  const getStatusColor = (status: ApplicationStatus) => {
    const colors = {
      "지원 전": "bg-muted text-muted-foreground",
      서류제출: "bg-blue-500/10 text-blue-600 border-blue-200",
      코테: "bg-purple-500/10 text-purple-600 border-purple-200",
      "1차 면접": "bg-orange-500/10 text-orange-600 border-orange-200",
      "2차 면접": "bg-yellow-500/10 text-yellow-600 border-yellow-200",
      "최종 면접": "bg-pink-500/10 text-pink-600 border-pink-200",
      합격: "bg-success/10 text-success border-success/20",
      불합격: "bg-destructive/10 text-destructive border-destructive/20",
    }
    return colors[status]
  }

  const getInterestIcon = (interest: InterestLevel) => {
    if (interest === "high") return <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
    if (interest === "medium") return <Star className="h-4 w-4 fill-gray-400 text-gray-400" />
    return <StarOff className="h-4 w-4 text-gray-300" />
  }

  const stats = {
    total: applications.length,
    applied: applications.filter((a) => a.stage !== "지원 전").length,
    interview: applications.filter((a) => a.stage.includes("면접")).length,
    passed: applications.filter((a) => a.stage === "합격").length,
  }

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">입사 지원 관리</h2>
          <p className="text-muted-foreground">지원 현황을 한눈에 관리하세요</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)} className="gap-2">
          <Plus className="h-4 w-4" />새 지원 추가
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">총 지원</p>
          <p className="text-2xl font-bold">{stats.total}개</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">서류 제출</p>
          <p className="text-2xl font-bold text-blue-600">{stats.applied}개</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">면접 진행</p>
          <p className="text-2xl font-bold text-orange-600">{stats.interview}개</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">합격</p>
          <p className="text-2xl font-bold text-success">{stats.passed}개</p>
        </Card>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <Card className="p-6 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-semibold text-lg mb-4">새 지원 추가</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>회사명</Label>
              <Input placeholder="예: 네이버" />
            </div>
            <div>
              <Label>포지션</Label>
              <Input placeholder="예: 프론트엔드 개발자" />
            </div>
            <div>
              <Label>공고 링크</Label>
              <Input placeholder="https://..." type="url" />
            </div>
            <div>
              <Label>마감일</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>직무 유형</Label>
              <Input placeholder="예: 신입, 경력" />
            </div>
            <div>
              <Label>전형 단계</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="지원 전">지원 전</SelectItem>
                  <SelectItem value="서류제출">서류제출</SelectItem>
                  <SelectItem value="코테">코테</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>시험 유형</Label>
              <Input placeholder="예: 코테 + 기술면접" />
            </div>
            <div>
              <Label>관심도</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">높음</SelectItem>
                  <SelectItem value="medium">보통</SelectItem>
                  <SelectItem value="low">낮음</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="flex-1">저장</Button>
            <Button variant="outline" onClick={() => setShowAddForm(false)}>
              취소
            </Button>
          </div>
        </Card>
      )}

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="text-left p-3 font-medium text-sm">관심도</th>
                <th className="text-left p-3 font-medium text-sm">회사명</th>
                <th className="text-left p-3 font-medium text-sm">포지션</th>
                <th className="text-left p-3 font-medium text-sm">URL</th>
                <th className="text-left p-3 font-medium text-sm">마감일</th>
                <th className="text-left p-3 font-medium text-sm">직무유형</th>
                <th className="text-left p-3 font-medium text-sm">전형단계</th>
                <th className="text-left p-3 font-medium text-sm">시험유형</th>
                <th className="text-left p-3 font-medium text-sm">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3">{getInterestIcon(app.interest)}</td>
                  <td className="p-3 font-medium">{app.company}</td>
                  <td className="p-3 text-muted-foreground">{app.position}</td>
                  <td className="p-3">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                    >
                      <ExternalLink className="h-3 w-3" />
                      링크
                    </a>
                  </td>
                  <td className="p-3 text-sm">{app.deadline}</td>
                  <td className="p-3">
                    <Badge variant="outline" className="text-xs">
                      {app.jobType}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <Badge className={getStatusColor(app.stage)}>{app.stage}</Badge>
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">{app.testType}</td>
                  <td className="p-3">
                    {app.appliedDate && <span className="text-sm text-muted-foreground">{app.appliedDate}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {applications.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-muted-foreground">아직 지원한 회사가 없습니다.</p>
          </div>
        )}
      </Card>
    </div>
  )
}