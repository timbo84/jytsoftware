import "../global.css";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import Footer from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "JYT Software",
    template: "%s | jytsoftware.com",
  },
  description:
    "Jumpstart Your Tomorrow Today! JYT Software, We build more than just websites, we build relationships.",
  openGraph: {
    title: "jytsoftware.com",
    description:
      "Jumpstart Your Tomorrow Today! JYT Software, We build more than just websites, we build relationships.",
    url: "https://jytsoftware.com",
    siteName: "jytsoftware.com",
    images: [
      {
        url: "https://jytsoftware.com/companylogo.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "JYTSoftware",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.jpg",
  },
};


const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[calSans.variable].join(" ")}>
      <head></head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
