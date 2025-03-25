"use client";

import Link from "next/link";
import React from "react";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import OfferGrid from "./components/offerCards";
import { motion } from "framer-motion";
import ProjectShowcase from "./components/projectShowcase";

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
  { icon: <Mail size={36} />, href: "mailto:timothy.roberts@jytsoftware.com" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/tech.mp4"
        autoPlay
        muted
        loop
      ></video>

      {/* Overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Navigation Bar */}
      <nav className="mb-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6 mt-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text px-4 py-2"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center flex-grow relative z-10">
        <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          JYT Software
        </h1>
        <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Development & Designs
        </h1>
      </div>

      <div className="mt-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
          JYT Software: "Jumpstart Your Tomorrow!"
        </h2>
        <p className="text-m text-white">
          All websites are built from the ground up to provide you with full
          control over designs and functionalities.
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
              Contact us Today!
            </button>
          </a>
        </motion.div>

        <ProjectShowcase />
        {/* <OfferGrid /> */}
        {/* TestimonialSliders can be added here */}
      </div>
    </div>
  );
}
