import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const grotesque = localFont({
  src: "@/fonts/BasementGrotesque-Black_v1.202.woff2",
});

export const metadata: Metadata = {
  title: "Basement Challenge",
  description: "A challenge built by Facundo Perez Montalvo",
};

// TODO: MANAGE OG IMAGE

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-background scroll-smooth antialiased",
        grotesque.className
      )}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
