import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "KyKy Fitness",
    description:
      "A cutting-edge personal training website featuring interactive tools like an AI chatbot powered by OpenAI, macro calculator and workout planner, and an intuitive, mobile-friendly design for seamless user engagement.",
    description1:
      "Introducing our innovative fitness website, designed to transform how personal trainers connect with their clients.\n\nBuilt using Next.js, Bootstrap, and Supabase, this platform combines sleek design with advanced functionality to deliver a seamless experience.\n\nAt its core is a custom AI chatbot powered by OpenAI, providing real-time fitness guidance to users and ensuring personalized support at every step.\n\nInteractive tools such as a macro calculator, workout planner, and personalized meal plan generator take user engagement to the next level, empowering clients to achieve their fitness goals with precision.\n\nThe website's responsive, mobile-friendly layout, complemented by clear CTAs and a sticky navigation bar, ensures accessibility across devices while maintaining a polished and professional look.\n\nThis website isn't just a tool—it's a fitness partner, redefining the way trainers and clients interact in the digital space. Step into the future of fitness with a platform built to inspire and support every journey.",
    techStack: [
      "React",
      "Vercel",
      "Next.js",
      "3rd Party API",
      "AI Integration",
    ],
    image: "/KyKyFitness1.png",
    images: [
      "/kyky1.png",
      "/kyky2.png",
      "/kyky3.png",
      "/kyky4.png",
      "/kyky5.png",
    ], // Multiple images for modal
    videoUrl: "https://youtube.com/embed/CKRBL2rCqpM",
    link: "https://kykyfitness.com/",
  },
  {
    title: "Evince",
    description:
      "A one-user blog platform designed for distraction-free writing and deeper audience connection through personalized expression.",
    description1:
      "Evince is a custom-built blogging platform designed exclusively for an individual author to provide a distraction-free writing experience tailored to their unique style and needs. Unlike traditional multi-user platforms, Evince focuses on personalization and simplicity, enabling the author to express their thoughts and stories without the complexities of shared environments. Built with a deep understanding of the author's vision, it prioritizes ease of use and a seamless interface to foster creativity and meaningful audience connections. The platform empowers the author with features such as real-time editing, responsive design, and intuitive publishing tools, ensuring their work is beautifully presented across all devices. Personalization options allow for a blog layout that reflects the author’s distinctive voice, while built-in analytics provide insights into reader engagement to refine their content strategy. By combining cutting-edge technologies like Next.js, React, and Supabase, Evince guarantees high performance and reliability, making it a trusted platform for impactful storytelling.",
      techStack: ["Next.js", "React", "Node.js", "Search Query","Supabase"],
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
    title: "Delta Sigma Theta Sorority, Inc",
    description:
      "",
    description1:
      "",
    techStack: [
      "React",
      "Vercel",
      "Next.js",
      "Supabase",
    ],
    image: "/fortsill.png",
    images: [
      "/fortsill1.png",
      "/fortsill2.png",
      "/fortsill3.png",
      "/fortsill4.png",
      "/fortsill5.png",
      "/fortsill6.png",
      "/fortsill7.png",
    ], // Multiple images for modal
    videoUrl: "",
    link: "https://fortsill.vercel.app/",
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
              className="w-full h-full object-fit rounded-lg shadow-md"
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
