"use client";

const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
const REDIRECT_URI = "http://localhost:3000/auth/callback/kakao";

export default function KakaoButton() {
  const handleKakaoLogin = () => {
    const kakaoAuthUrl =
      `https://kauth.kakao.com/oauth/authorize` +
      `?response_type=code` +
      `&client_id=${KAKAO_REST_API_KEY}` +
      `&redirect_uri=${REDIRECT_URI}`;

    console.log("이동할 URL:", kakaoAuthUrl); // ✅
    window.location.href = kakaoAuthUrl;
  };

  return <button onClick={handleKakaoLogin}>카카오로 시작하기</button>;
}