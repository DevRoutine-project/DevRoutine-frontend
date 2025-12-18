"use client";

import KakaoButton from "@/components/ui/common/kakaoButton";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center 
                     bg-gradient-to-b from-blue-50 to--50">
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white 
                   px-7 py-8 text-center space-y-6 
                   shadow-lg ring-1 ring-gray-100"
      >

        {/* 로고 / 서비스명 */}
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
            DevRoutine
          </h1>
          <p className="text-sm text-gray-500">
          취준생을 위한 일정 · 목표 · 입사지원 통합 관리 서비스
          </p>
        </div>

        {/* 핵심 가치 제안 */}
        <div className="space-y-2 text-sm text-gray-600">
          <p>📊 학습 · 목표 진행 상황을 시각적으로 관리하고</p>
          <p>📅 일정과 루틴을 체계적으로 쌓아가며</p>
          <p>🧾 입사지원 현황까지 한 곳에서 관리하세요</p>
        </div>

        {/* 구분선 */}
        <div className="flex items-center gap-3 pt-2 text-xs text-gray-400">
          <div className="flex-1 h-px bg-gray-200" />
          간편 로그인
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* 카카오 로그인 */}
        <div className="space-y-2">
          <KakaoButton />
          <p className="text-[11px] text-gray-400">
            카카오 계정 외 다른 정보는 저장하지 않아요
          </p>
        </div>

        {/* 하단 보조 메시지 */}
        <p className="pt-2 text-xs text-gray-400">
          오늘의 기록이, 내일의 합격으로 이어집니다
        </p>
      </div>
    </main>
  );
}