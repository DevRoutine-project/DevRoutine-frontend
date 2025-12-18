// import { redirect } from "next/navigation";

// export default function HomePage() {
//   redirect("/dashboard");
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const handleKakaoLogin = () => {
    // 👉 추후 백엔드 카카오 OAuth 엔드포인트로 연결
    window.location.href = "/api/auth/kakao";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8 text-center space-y-6">
        
        {/* 로고 / 서비스명 */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-blue-600">
            DevRoutine
          </h1>
          <p className="text-gray-500 text-sm">
            취업 준비를 한눈에 관리하는 일정 & 목표 관리 서비스
          </p>
        </div>

        {/* 설명 */}
        <div className="text-sm text-gray-600 leading-relaxed">
          <p>📊 학습과 목표를 시각화하고</p>
          <p>📅 일정을 체계적으로 관리하며</p>
          <p>🧾 입사지원 현황까지 한 번에 관리하세요.</p>
        </div>

        {/* 카카오 로그인 버튼 */}
        <Button
          onClick={handleKakaoLogin}
          className="w-full bg-[#FEE500] text-black hover:bg-[#FDDC00] flex items-center justify-center gap-2"
        >
          {/* 카카오 아이콘 (이미지 or SVG로 교체 가능) */}
          <span className="font-medium">카카오로 시작하기</span>
        </Button>

        {/* 하단 안내 */}
        <p className="text-xs text-gray-400">
          로그인 시 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
        </p>
      </div>
    </main>
  );
}