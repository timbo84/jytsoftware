"use client";

import { Navigation } from "../components/nav";
import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "../components/particles";

const founders = [
  {
    name: "Joseph Ellis",
    label: "Software Developer | AppDev",
    image: "/joe-cool4.png",
    bio: "Joseph is a full-stack developer known for his passion for front-end design and problem-solving abilities. He combines his technical prowess with a heart devoted to his family.",
    link: "https://sites.google.com/view/josephellis/home",
  },
  {
    name: "Yissel Nunez",
    label: "Software Developer | Graphic Designer",
    image: "/yissel-cool1.png",
    bio: "Yissel is a software developer with a flair for graphic design. She balances motherhood and technology with grace, creating visually stunning and functional designs.",
    link: "https://www.linkedin.com/in/yissellucia/",
  },
  {
    name: "Tim Roberts",
    label: "Software Developer | Digital Marketer",
    image: "/tim-cool2.jpg",
    bio: "Tim is a co-founder of JYT Software, driven by integrity and a passion for coding. He builds strong client relationships and leads with innovation in web development and marketing.",
    link: "https://timothy-roberts.vercel.app",
  },
];

export default function AboutPage() {
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
          Founded by a trio of visionary coders, our company stands as a testament
          to the power of collaboration. Each founder brings their own distinct
          style and technical prowess, creating a synergy that transforms ordinary
          code into extraordinary user experiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          With expanding expertise in digital marketing, we empower brands to thrive
          in the competitive online marketplace. Our strategic approach to SEO ensures
          your website connects you with your ideal audience.
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
          Meet The Founders
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-black/50 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={founder.image}
                alt={`Profile picture of ${founder.name}`}
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="text-xl font-bold text-yellow-400 mt-4">{founder.name}</h3>
              <p className="text-sm text-zinc-400">{founder.label}</p>
              <p className="text-sm text-center mt-2 text-zinc-300">{founder.bio}</p>
              <a
                href={founder.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-yellow-400 hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
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
    </div>
  );
}
