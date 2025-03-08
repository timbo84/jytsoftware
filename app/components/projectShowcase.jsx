"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Evince",
    description: "A one-user blog platform designed for distraction-free writing and deeper audience connection through personalized expression.",
    image: "/evince.png",
    link: "https://www.danlemaire.com/",
  },
//   {
//     title: "Portfolio Website",
//     description: "A sleek, modern portfolio to showcase personal projects and skills with interactive animations.",
//     image: "/projects/portfolio.jpg",
//     link: "#",
//   },
  {
    title: "KyKy Fitness",
    description: "A cutting-edge personal training website featuring AI-powered real-time fitness guidance, interactive tools like a macro calculator and workout planner, and an intuitive, mobile-friendly design for seamless user engagement.",
    image: "/KyKyFitness.png",
    link: "https://kyfitness.vercel.app/",
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="flex flex-col items-center text-center p-6 bg-black/50 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-white mb-4">Featured Projects</h2>
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            <img
              src={projects[selectedProject].image}
              alt={projects[selectedProject].title}
              className="w-full h-70 object-fit rounded-lg shadow-md"
            />
            <h3 className="text-xl text-yellow-400 mt-4 font-bold">
              {projects[selectedProject].title}
            </h3>
            <p className="text-white mt-2">{projects[selectedProject].description}</p>
            <a
              href={projects[selectedProject].link}
              className="mt-4 inline-block text-yellow-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={() => setSelectedProject((prev) => (prev + 1) % projects.length)}
        className="mt-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md"
      >
        Next Project
      </button>
    </div>
  );
}
