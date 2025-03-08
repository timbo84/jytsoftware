"use client";

import Link from "next/link";
import React from "react";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import Particles from "./components/particles";
import OfferGrid from "./components/offerCards";
import { motion } from "framer-motion";
import TestimonialSliders from "./components/testimonials";
import ProjectShowcase from "./components/projectShowcase";

const navigation = [
  { name: "Meet The Founders", href: "/developers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    icon: <Facebook size={24} />,
    href: "https://www.facebook.com/JYTSoftware",
  },
  { icon: <Instagram size={24} />, href: "https://instagram.com/jytsoftware" },
  {
    icon: <Linkedin size={24} />,
    href: "https://www.linkedin.com/company/jyt-software-development-designs",
  },
  { icon: <Mail size={24} />, href: "mailto:timothy.roberts@jytsoftware.com" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      /> */}

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          JYT Software
        </h1>
        <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Development & Designs
        </h1>
      </div>

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
          JYT Software: "Jumpstart Your Tomorrow, Today!"
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
        <OfferGrid />
        {/* <TestimonialSliders /> */}
      </div>
    </div>
  );
}
