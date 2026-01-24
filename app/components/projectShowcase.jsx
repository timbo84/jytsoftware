import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Social Event Rentals",
    location: "Nebraska",
    description:
      "Premium event rental website showcasing photo booths, 360° experiences, and custom event services.",
    description1:
      "Social Event Rentals is a full-service event rental company that delivers premium, interactive experiences tailored for weddings, corporate events, and private parties. The website was built to highlight their wide range of services—including photo booths, 360° experiences, glam booths, floral arches, and snack carts—through an elegant, modern design that balances professionalism with fun...",
    techStack: ["React", "Next.js", "Vercel"],
    image: "/ser.png",
    images: ["/ser1.jpg", "/ser2.jpg", "/ser3.jpg"],
    videoUrl: "",
    link: "https://www.socialeventrentalsne.com/",
  },
  {
    title: "KyKy Fitness",
    location: "Texas",
    description:
      "Modern fitness platform with AI chatbot, macro calculator, and workout planner.",
    description1:
      "A cutting-edge fitness website designed to enhance trainer-client interaction through AI-driven guidance, interactive tools, and responsive design...",
    techStack: ["Next.js", "React", "AI Integration", "Supabase"],
    image: "/kyky6.jpg",
    images: ["/kyky1.png", "/kyky2.png", "/kyky3.png"],
    videoUrl: "https://youtube.com/embed/CKRBL2rCqpM",
    link: "https://kykyfitness.com/",
  },
  {
    title: "Evince",
    location: "California",
    description:
      "Custom single-author blogging platform focused on distraction-free writing.",
    description1:
      "Evince is a custom-built blogging platform designed exclusively for an individual author...",
    techStack: ["Next.js", "React", "Supabase"],
    image: "/evince.png",
    images: ["/evince1.png", "/evince2.png"],
    videoUrl: "https://www.youtube.com/embed/BIyPOTFl_ZY",
    link: "https://www.danlemaire.com/",
  },
  {
    title: "Delta Sigma Theta Sorority, Inc.",
    location: "Oklahoma",
    description:
      "Organization website built to support communication, events, and community engagement.",
    description1: "",
    techStack: ["Next.js", "React", "Supabase", "Vercel"],
    image: "/fortsill.png",
    images: ["/fortsill1.png", "/fortsill2.png"],
    videoUrl: "",
    link: "http://lfsokalumnaedeltas.org/",
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        Featured Projects
      </h2>

      {/* Card Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-black/60 rounded-xl overflow-hidden shadow-lg border border-white/10"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-6 text-white space-y-4">
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-400">
                  📍 {project.location}
                </p>
              </div>

              <p className="text-gray-300 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-yellow-400 hover:underline text-sm"
                >
                  Discover More →
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline text-sm"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
