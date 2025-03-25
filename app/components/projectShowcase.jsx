import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Evince",
    description:
      "A one-user blog platform designed for distraction-free writing and deeper audience connection through personalized expression.",
    techStack: ["Next.js", "React", "Node.js", "Supabase"],
    image: "/evince.png",
    images: [
      "/evince1.png",
      "/evince2.png",
      "/evince3.png",
      "/evince4.png",
      "/evince5.png",
    ], // Multiple images for modal
    videoUrl: "https://www.youtube.com/embed/BIyPOTFl_ZY",
    link: "https://www.danlemaire.com/",
  },
  {
    title: "KyKy Fitness",
    description:
      "A cutting-edge personal training website featuring interactive tools like a macro calculator and workout planner, and an intuitive, mobile-friendly design for seamless user engagement.",
    techStack: ["React", "Vercel", "Next.js"],
    image: "/KyKyFitness.png",
    images: [
      "/kyky1.png",
      "/kyky2.png",
      "/kyky3.png",
      "/kyky4.png",
      "/kyky5.png",
    ], // Multiple images for modal
    videoUrl: "https://youtube.com/embed/CKRBL2rCqpM",
    link: "https://kyfitness.vercel.app/",
  },
];

export default function ProjectShowcase() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0); // Keep track of active project
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length); // Loop through projects
  };

  return (
    <div className="flex flex-col items-center text-center p-6 bg-black/50 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-4">
        Featured Projects
      </h2>

      {/* Project Showcase */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProjectIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            {/* Project Image */}
            <img
              src={projects[selectedProjectIndex].image}
              alt={projects[selectedProjectIndex].title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            {/* Project Title */}
            <h3 className="text-xl text-yellow-400 mt-4 font-bold">
              {projects[selectedProjectIndex].title}
            </h3>
            {/* Project Description */}
            <p className="text-white mt-2">
              {projects[selectedProjectIndex].description}
            </p>
            {/* Technology Stack */}
            <ul className="flex justify-center gap-2 mt-2 text-sm text-gray-300">
              {projects[selectedProjectIndex].techStack.map((tech, index) => (
                <li key={index} className="px-2 py-1 bg-gray-700 rounded">
                  {tech}
                </li>
              ))}
            </ul>

            <button
              className="mt-4 inline-block text-yellow-400 hover:underline"
              onClick={openModal}
            >
              Discover More →
            </button>
            <br />

            <a
              href={projects[selectedProjectIndex].link}
              className="mt-4 inline-block text-yellow-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website →
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Navigation */}
      <div className="flex justify-center gap-4 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedProjectIndex(index)}
            className={`w-3 h-3 rounded-full ${
              selectedProjectIndex === index ? "bg-yellow-400" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      {/* Next Project Button */}
      <motion.button
        onClick={nextProject} // Navigate to the next project
        className="mt-6 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Next Project ➡️
      </motion.button>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={projects[selectedProjectIndex]} // Pass the currently selected project
        />
      )}
    </div>
  );
}
