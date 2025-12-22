"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function KakaoCallbackPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    console.log("카카오 인가 코드:", code);
  }, []);

  return "/dashboard";
}