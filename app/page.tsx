"use client";

import Link from "next/link";
import React from "react";
// import { Linkedin } from "lucide-react";
// import { Instagram } from "lucide-react";
// import { Facebook } from "lucide-react";
// import { Mail } from "lucide-react";
import Particles from "./components/particles";

const navigation = [
  { name: "Meet The Founders", href: "/developers" },
  { name: "About", href: "/about" },
  //   { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// const socials = [
//   {
//     icon: <Facebook size={20} />,
//     href: "https://www.facebook.com/profile.php?id=61559267145709&mibextid=ZbWKwL",
//     label: "FaceBook",
//     handle: "JYTSoftware",
//   },
//   {
//     icon: <Instagram size={20} />,
//     href: "https://instagram.com/jytsoftware",
//     label: "Instagram",
//     handle: "JYTSoftware",
//   },
//   {
//     icon: <Linkedin size={20} />,
//     href: "https://www.linkedin.com/company/jyt-software-development-designs",
//     label: "LinkedIn",
//     handle: "JYTSoftware",
//   },
//   {
//     icon: <Mail size={20} />,
//     href: "mailto:timothy.roberts@jytsoftware.com",
//     label: "Email",
//     handle: "@jytsoftware.com",
//   },
// ];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text xs:from-red-300 xs:to-yellow-300 xs:hover:text-yellow-300 sm:from-red-300 sm:to-yellow-300 sm:hover:text-yellow-300 md:from-red-500 md:to-yellow-500 md:hover:text-yellow-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      />

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          JYT Software
        </h1>
        <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Development & Designs
        </h1>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text xs:from-red-300 xs:to-yellow-300 sm:from-red-300 sm:to-yellow-300 md:from-red-500 md:to-yellow-500">
          JYT Software: "Jumpstart Your Tomorrow, Today!"
        </h2>
        <p className="text-m text-white">
          All websites are built from the ground up to provide you with full
          control over the designs and functionalities. We do not use third-party website templates
          unless it is your specific request.
        </p>
        <div className="flex justify-center items-center pt-12 pb-24">
          <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md">
            <a href="/contact">Contact us Today!</a>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
          {/* Portfolio Website Offer*/}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <a
              href="mailto:timothy.roberts@jytsoftware.com?subject=Portfolio%20Website%20Inquiry"
              className="card flex flex-col items-center text-center p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                <span className="text-xl line-through">$599</span> $199
              </h3>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-black">
                for a Portfolio Website!
              </h3>
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-black">
                And Get a FREE Logo Design!
              </p>
              <p className="text-xs text-white">
                <u>May include (but not limted to):</u> Personalized design
                consultation, Responsive and mobile-friendly layout,
                SEO-optimized portfolio pages, Integration with social media
                platforms, Basic analytics setup
              </p>
            </a>
          </div>
          {/*  Basic Website Offer */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <a
              href="mailto:timothy.roberts@jytsoftware.com?subject=Basic%20Website%20Inquiry"
              className="card flex flex-col items-center text-center p-4 bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg shadow-lg"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                <span className="text-xl line-through">$999</span> $299
              </h3>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-black">
                for basic website!
              </h3>
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-black">
                And Get Your First Month Of Maintenance FREE!
              </p>
              <p className="text-xs text-white">
                <u>May include (but not limted to):</u> User-friendly content
                management system (CMS), SSL certificate for enhanced security,
                Custom email setup with your domain Basic on-page, SEO Initial
                content setup.
              </p>
            </a>
          </div>
          {/*Custom Website Offer */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <a
              href="mailto:timothy.roberts@jytsoftware.com?subject=Custom%20Website%20Inquiry"
              className="card flex flex-col items-center text-center p-4 bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg shadow-lg"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                <span className="text-xl line-through">$1499</span> $699
              </h3>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-black">
                for a Custom Website!
              </h3>
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-black">
                Includes Your First Month Of Maintenance FREE!
              </p>
              <p className="text-xs text-white">
                <u>May include (but not limted to):</u> Tailored user experience
                design, Advanced interactivity and animations, E-commerce
                integration, Custom blog design and setup.
              </p>
            </a>
          </div>
          {/* Premium Website Offer */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <a
              href="mailto:timothy.roberts@jytsoftware.com?subject=Premium%20Website%20Inquiry"
              className="card flex flex-col items-center text-center p-4 bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg shadow-lg"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                <span className="text-xl line-through">$1999</span> $999
              </h3>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-black">
                for a Premium Website!
              </h3>
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-black">
                Plus, Get a FREE SEO Audit!
              </p>
              <p className="text-xs text-white">
                <u>May include (but not limted to):</u> Premium design, Advanced
                SEO optimization, Comprehensive analytics and reporting, Custom
                API integrations, Priority support and maintenance.
              </p>
            </a>
          </div>

          {/*Business Website Offer*/}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <a
              href="mailto:timothy.roberts@jytsoftware.com?subject=Business%20Website%20Inquiry"
              className="card flex flex-col items-center text-center p-4 bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg shadow-lg"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                <span className="text-xl line-through">$9,999</span> $4,999
              </h3>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-black">
                for a Business Website!
              </h3>
              <p className="text-xs md:text-sm lg:text-lg font-semibold text-black">
                Get 24/7 Support for the First Month FREE!
              </p>
              <p className="text-xs text-white">
                <u>May include (but not limted to):</u> Business design, 24/7
                support Custom database solutions, In-depth market research and
                competitive analysis, Custom CRM integration, Full branding
                package (logo, business cards, letterheads).
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
