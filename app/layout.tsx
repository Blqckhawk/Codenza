import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "./components/google-analytics";
import { WhatsAppButton } from "./components/whatsapp-button";
import { RegionProvider } from "./components/region-context";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codenza | Premium Software Engineering",
  description:
    "Codenza builds secure, scalable, and intelligent software solutions for ambitious companies.",
  metadataBase: new URL("https://codenza.com"),
  openGraph: {
    title: "Codenza | Premium Software Engineering",
    description:
      "Secure, scalable, and intelligent software for ambitious companies.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <GoogleAnalytics />
          <RegionProvider>
          {children}
          </RegionProvider>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}