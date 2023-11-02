import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const grotesque = localFont({
  src: "../assets/fonts/basement-grotesque.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://basement-challenge-facundo.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["next.js", "typescript", "tailwindcss", "radix-ui"],
  authors: [
    {
      name: "Facundo Perez Montalvo",
      url: "https://facuperezm.com",
    },
  ],
  creator: "facuperezm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.jpg`],
    creator: "@facuperezm",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-background text-foreground scroll-smooth antialiased container",
        grotesque.className
      )}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
