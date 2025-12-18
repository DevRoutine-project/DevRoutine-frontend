"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, Calendar, Briefcase, Target } from "lucide-react"
import { cn } from "@/lib/utils"

const menus = [
  { href: "/dashboard", label: "대시보드", icon: LayoutGrid },
  { href: "/calendar", label: "캘린더", icon: Calendar },
  { href: "/applications", label: "입사지원", icon: Briefcase },
  { href: "/goals", label: "목표", icon: Target },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Link href="/dashboard">
            <Image src="/logo.png" alt="DevRoutine 로고" width={120} height={32} priority />
          </Link>
          <span className="pl-1 text-xs text-muted-foreground">
            취준생 일정 관리
          </span>
        </div>

        <nav className="rounded-full bg-muted/50 px-1.5 py-1.5 flex gap-1">
          {menus.map((menu) => {
            const active = pathname.startsWith(menu.href)
            const Icon = menu.icon

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all",
                  active
                    ? "bg-white text-blue-600 ring-1 ring-blue-200 shadow font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {menu.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}