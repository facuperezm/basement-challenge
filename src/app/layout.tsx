import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const grotesque = localFont({
  src: "../assets/fonts/basement-grotesque.woff2",
  display: "swap",
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
        "min-h-screen bg-background text-foreground scroll-smooth antialiased",
        grotesque.className
      )}
    >
      <body className="container mx-auto overflow-x-hidden">{children}</body>
    </html>
  );
}
