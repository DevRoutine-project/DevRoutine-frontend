"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");
    console.log("[KAKAO CALLBACK] code = ", code);

    if (!code) return;

    fetch("http://localhost:8080/api/auth/kakao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
    .then(res => {
      console.log("[KAKAO CALLBACK] response status =", res.status);
      return res.json();
    })
    .then(data => {
      console.log("[KAKAO CALLBACK] response data =", data);
      console.log("[KAKAO CALLBACK] accessToken =", data.token?.accessToken);
      console.log("[KAKAO CALLBACK] refreshToken =", data.token?.refreshToken);

      localStorage.setItem("accessToken", data.token.accessToken);
      localStorage.setItem("refreshToken", data.token.refreshToken);

      // router.push("/dashboard");
    })
    .catch(err => {
      console.error("카카오 로그인 실패", err);
    });
  }, []);

  return <div>카카오 로그인 처리 중...</div>;
}