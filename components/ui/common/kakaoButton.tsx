"use client";

import Image from "next/image";

export default function KakaoButton() {
  const K_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

  const K_REDIRECT_URI =
    process.env.NODE_ENV === "production"
      ? "https://frontend-five-sepia-55.vercel.app/auth/callback/kakao"
      : "http://localhost:3000/auth/callback/kakao";

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div
      onClick={handleKakaoLogin}
      className="
        flex w-full items-center justify-center gap-2
        rounded-lg bg-[#FEE500]
        py-2.5 text-sm font-bold text-black
        shadow-sm hover:brightness-95 transition
      "
    >
      <Image
        src="/kakao_logo.png"
        alt="카카오"
        width={18}
        height={18}
      />
      카카오로 시작하기
    </div>
  );
} 