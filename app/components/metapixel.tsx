"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface MetaPixelProps {
  pixelId: 1825631221277187;
}

const MetaPixel: React.FC<MetaPixelProps> = ({ pixelId }) => {
  const pathname = usePathname();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Trigger a page view on route change
    const handleRouteChange = () => {
      if (window.fbq) {
        window.fbq("track", "PageView");
      }
    };
    if (searchParams) {
      const params = Object.fromEntries(searchParams);
    }

    handleRouteChange();
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://connect.facebook.net/en_US/fbevents.js`}
        onLoad={() => {
          if (window.fbq) {
            window.fbq("init", pixelId);
            window.fbq("track", "PageView");
          }
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
};

export default MetaPixel;
