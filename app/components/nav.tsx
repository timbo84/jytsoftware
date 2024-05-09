"use client";
import { ArrowLeft, Castle, Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link
              href="/developers"
              className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text"
            >
              Meet The Founders
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text"
            >
              About
            </Link>

            {/* <Link
							href="/projects"
							className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text"
						>
							Projects
						</Link> */}
            <Link
              href="/contact"
              className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <Home className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
