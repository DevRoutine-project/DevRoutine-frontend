"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      console.log("카카오 인가 코드:", code);

      // 👉 지금은 로그인 성공 처리만
      router.replace("/dashboard");
    }
  }, [searchParams, router]);

  return (
    <p className="mt-20 text-center text-sm text-muted-foreground">
      카카오 로그인 처리 중입니다...
    </p>
  );
}
