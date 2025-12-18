"use client";

import "./globals.css";
import Header from "@/components/ui/layouts/header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideHeader = pathname === "/";

  return (
    <html lang="ko">
      <body>
        {!hideHeader && <Header />}
        <main className="mx-auto max-w-7xl px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
