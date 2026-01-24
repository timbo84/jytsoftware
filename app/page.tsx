"use client";

import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail, Youtube } from "lucide-react";
import OfferGrid from "./components/offerCards";
import { motion } from "framer-motion";
import ProjectShowcase from "./components/projectShowcase";
import TrustIndicators from "./components/trustIndicators";
import TestimonialCarousel from "./components/testimonialCarousel";
import SpeedComparison from "./components/speedComparison";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    icon: <Facebook size={36} />,
    href: "https://www.facebook.com/profile.php?id=61559267145709&mibextid=ZbWKwL",
  },
  { icon: <Instagram size={36} />, href: "https://instagram.com/jytsoftware" },
  {
    icon: <Linkedin size={36} />,
    href: "https://www.linkedin.com/company/jyt-software-development-designs",
  },
  {
    icon: <Youtube size={36} />,
    href: "https://www.youtube.com/@JYTSoftware",
  },
];

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoSize = windowWidth <= 992 ? 50 : 125;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[75vh] flex flex-col overflow-hidden">
        {/* Video Background - only in hero section */}
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-0"
          src="/tech.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay to enhance text readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Navigation Bar */}
        <nav className="mb-16 animate-fade-in relative z-10">
          {/* <Image
            src="/newJYT.png"
            alt="jyt logo"
            width={logoSize}
            height={logoSize}
          /> */}
          <ul className="flex items-center justify-center gap-6 mt-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-semibold text-center px-4 py-2"
                style={{
                  background: 'linear-gradient(to right, #ef4444, #eab308)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Hero Title */}
        <div className="flex flex-col items-center justify-center flex-grow relative z-10">
          <h1 className="z-10 text-xl duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap" style={{
            background: '#ffffff',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            JYT Software
          </h1>
          <h1 className="z-10 text-xl duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap" style={{
            background: '#ffffff',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Development & Designs
          </h1>

          {/* Logo */}
          <motion.div
            className="-mt-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/jytLogo.png"
              alt="JYT Software Logo"
              width={350}
              height={350}
              className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-[350px] md:h-[350px]"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.5))'
              }}
            />
          </motion.div>
        </div>

        {/* Stronger gradient fade to black at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/60 to-black z-[1]"></div>
      </section>

      {/* Rest of content with black background */}
      <div className="bg-black text-center animate-fade-in">
        <h2 className="text-3xl font-semibold" style={{
          background: 'linear-gradient(to right, #ef4444, #eab308)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Custom Websites Built & Maintained for Businesses Nationwide
        </h2>
        <p className="text-m text-white">
          Based in Kingsburg, California — working with businesses across the
          U.S. to build fast, secure, and reliable websites. No templates. No
          outsourcing. Just clean code and websites that work.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 py-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Contact Button with Shake Effect */}
        <motion.div
          className="flex justify-center items-center pt-12 pb-24"
          animate={{ y: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="/contact">
            <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md">
              Get a Free Website Audit
            </button>
          </a>
        </motion.div>

        <TrustIndicators />

        <ProjectShowcase />

        <SpeedComparison />

        <TestimonialCarousel />

        <section className="py-24 px-6 ">
        <h2 className="text-3xl font-semibold mb-12" style={{
          background: 'linear-gradient(to right, #ef4444, #eab308)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>What We Do</h2>

        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-gray-200">
          <li>• Custom website development</li>
          <li>• Hosting & ongoing maintenance</li>
          <li>• SEO & performance optimization</li>
          <li>• E-commerce & online ordering</li>
          <li>• Booking & appointment systems</li>
          <li>• Monitoring, security & backups</li>
        </ul>

        <p className="text-center text-gray-300 mt-8">
          Every website is built from the ground up — no templates or page
          builders.
        </p>
      </section>

{/* PRICING */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12" style={{
          background: 'linear-gradient(to right, #ef4444, #eab308)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Website Packages That Make Sense
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Starter */}
          <div className="border border-white/20 rounded p-8">
            <h3 className="text-xl font-semibold mb-2 text-white">Starter</h3>
            <p className="text-2xl font-bold mb-4 text-white">$150 / month</p>
            <p className="text-sm mb-6 text-gray-300">
              + $1,500 one-time setup
            </p>
            <ul className="space-y-2 text-gray-200">
              <li>✓ Up to 5 pages</li>
              <li>✓ Secure hosting & SSL</li>
              <li>✓ Weekly backups</li>
              <li>✓ Basic SEO</li>
              <li>✓ 1 hour updates/month</li>
            </ul>
          </div>

          {/* Professional */}
          <div className="border border-yellow-400 rounded p-8 bg-black">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Professional ⭐
            </h3>
            <p className="text-2xl font-bold mb-4 text-white">$250 / month</p>
            <p className="text-sm mb-6 text-gray-300">
              + $2,500 one-time setup
            </p>
            <ul className="space-y-2 text-gray-200">
              <li>✓ Up to 10 pages</li>
              <li>✓ Blog & galleries</li>
              <li>✓ Google Analytics</li>
              <li>✓ Enhanced SEO</li>
              <li>✓ 2 hours updates/month</li>
            </ul>
          </div>

          {/* Premium */}
          <div className="border border-white/20 rounded p-8">
            <h3 className="text-xl font-semibold mb-2 text-white">Premium</h3>
            <p className="text-2xl font-bold mb-4 text-white">$400 / month</p>
            <p className="text-sm mb-6 text-gray-300">
              + $4,000 one-time setup
            </p>
            <ul className="space-y-2 text-gray-200">
              <li>✓ Unlimited pages</li>
              <li>✓ E-commerce / booking</li>
              <li>✓ Monthly reports</li>
              <li>✓ Ongoing SEO</li>
              <li>✓ Same-day support</li>
            </ul>
          </div>
        </div>
      </section>

        {/* FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold" style={{
          background: 'linear-gradient(to right, #ef4444, #eab308)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Ready to improve your website?
        </h2>
        <p className="text-gray-200 mb-10">
          Start with a free website audit. No pressure — just honest feedback.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/contact"
            className="px-6 py-3 rounded bg-gradient-to-r from-red-500 to-yellow-500 font-semibold"
          >
            Schedule Free Audit
          </Link>
          <a
            href="mailto:justin@jytsoftware.com"
            className="px-6 py-3 rounded border border-white/40 flex items-center gap-2 text-white"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </section>
        {/* <OfferGrid /> */}
        {/* TestimonialSliders can be added here */}
      </div>
    </div>
  );
}
