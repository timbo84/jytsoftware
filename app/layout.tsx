import "../global.css";
// import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
// import MetaPixel from "./components/metapixel";

export const metadata: Metadata = {
  title: {
    default: "jytsoftware.com",
    template: "%s | jytsoftware.com",
  },
  description: "Jumpstart Your Tomorrow Today! JYT Software, We build more than just websites, we build relationships.",
  openGraph: {
    title: "jytsoftware.com",
    description: "Jumpstart Your Tomorrow Today! JYT Software, We build more than just websites, we build relationships.",
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
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

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
      <head>
        <Analytics />
        {/* <MetaPixel pixelId={1825631221277187}/> */}
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
