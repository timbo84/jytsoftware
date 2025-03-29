import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [selectedImage, setSelectedImage] = useState(null); // For enlarged image

  // Handle body scrolling when modal is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up when the component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/70 z-50"
        onClick={onClose} // Close when overlay is clicked
      ></div>

      {/* Modal Content */}
      <motion.div
        className="fixed top-0 right-0 w-full max-w-md h-full bg-zinc-900 text-white shadow-lg z-50 overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      >

        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:hidden bg-red-500 text-white p-2 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          ← Back
        </button>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-yellow-400 text-xl font-bold"
        >
          X
        </button>

        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-300 text-left">{project.description1}</p>

          {/* Embedded Video */}
          {project.videoUrl && (
            <iframe
              className="w-full h-56 rounded-lg mt-6"
              src={project.videoUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Image Column */}
        {project.images && (
          <div className="space-y-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        )}
        <button
          onClick={onClose}
          className="sm:hidden bg-red-500 text-white p-2 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          ← Back
        </button>
      </motion.div>

      {/* Enlarged Image */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[50%] max-h-[50%] object-contain rounded-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 text-xl font-bold"
          >
            X
          </button>
          <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:hidden bg-red-500 text-white p-2 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          ← Back
        </button>
        </motion.div>
      )}
    </>
  );
};

export default ProjectModal;
