"use client";

import { Navigation } from "../components/nav";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "../components/particles";
import MeetFounderModal from "@/app/components/meetTheFounderModal"; // Import the modal component
import { useState } from "react";

const founders = [
  {
    name: "Timothy Roberts",
    label: "Founder & Sole Proprietor | Software Developer",
    image: "/tim1.jpg",
    bio: "Timothy Roberts is the sole proprietor of JYT Software, driven by integrity and a passion for web development. Tim leads with innovation in web development and digital marketing, crafting impactful digital experiences.",
    // Link replaced with modal functionality
  },
];

export default function AboutPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative pb-16">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="px-6 pt-16 mx-auto max-w-7xl text-center lg:px-8 xs:space-y-16 xs:pt-24 mt-4 sm:space-y-16 sm:pt-24 md:space-y-16 md:pt-24 lg:space-y-16 lg:pt-24">
        <motion.h1
          className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text xs:from-red-500 xs:to-yellow-500 sm:from-red-500 sm:to-yellow-500 md:from-red-500 md:to-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WHAT WE'RE ABOUT
        </motion.h1>
      </div>
      <div className="w-full h-px bg-zinc-800 my-8" />

      {/* About Content */}
      <div className="px-6 mx-auto space-y-8 max-w-7xl text-zinc-400">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          At <strong>JYT Software</strong>, we believe that the foundation of a
          successful online presence is a robust and innovative website. Our
          mission is to Jumpstart Your Tomorrow by providing cutting-edge web
          solutions today.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Founded by a visionary coder, our company stands as a testament to the power
          of passion and dedication. Our synergy transforms ordinary code into
          extraordinary user experiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          With expertise in web development and digital marketing, we empower
          brands to thrive in the competitive online marketplace. Our strategic
          approach to SEO ensures your website connects you with your ideal audience.
        </motion.p>
      </div>
      <div className="w-full h-px bg-zinc-800 my-8" />

      {/* Founders Section */}
      <div className="px-6 mx-auto max-w-7xl">
        <motion.h2
          className="text-3xl font-bold tracking-tight sm:text-4xl text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet The Founder
        </motion.h2>
        <div className="flex flex-col items-center bg-black/50 rounded-lg shadow-lg p-6">
          <Image
            src={founders[0].image}
            alt={`Profile picture of ${founders[0].name}`}
            width={600}
            height={500}
            className="rounded"
          />
          <h3 className="text-xl font-bold text-yellow-400 mt-4">{founders[0].name}</h3>
          <p className="text-sm text-zinc-400">{founders[0].label}</p>
          <p className="text-sm text-center mt-2 text-zinc-300">{founders[0].bio}</p>
          <button
            onClick={openModal}
            className="mt-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md"
          >
            Learn About the Founder
          </button>
        </div>
      </div>

      {/* Call-To-Action */}
      <div className="flex justify-center items-center pt-12">
        <motion.button
          className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="/contact">Contact Us Today!</a>
        </motion.button>
      </div>

      {/* Modal */}
      {isModalOpen && <MeetFounderModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
}