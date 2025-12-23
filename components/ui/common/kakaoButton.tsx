"use client";

const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
const REDIRECT_URI = "http://localhost:3000/auth/callback/kakao";

export default function KakaoButton() {
  const handleKakaoLogin = () => {
    const kakaoAuthUrl =
      "https://kauth.kakao.com/oauth/authorize" +
      "?response_type=code" +
      `&client_id=${KAKAO_REST_API_KEY}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      "&scope=profile_nickname,account_email";

    // ✅ 로그 1: 버튼 클릭 확인
    console.log("[KAKAO BUTTON] clicked");

    // ✅ 로그 2: 환경변수 확인 (undefined 체크)
    console.log("[KAKAO BUTTON] REST_API_KEY =", KAKAO_REST_API_KEY);

    // ✅ 로그 3: 최종 이동 URL
    console.log("[KAKAO BUTTON] redirect URL =", kakaoAuthUrl);

    window.location.href = kakaoAuthUrl;
  };

  return (
    <button type="button" onClick={handleKakaoLogin}>
      카카오로 시작하기
    </button>
  );
}
