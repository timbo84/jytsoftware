"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    quote: "JYT Software transformed my business! Their designs are top-notch, and the functionality is seamless.",
    company: "Acme Corp",
  },
  {
    name: "Jane Smith",
    quote: "I couldn't be happier with the website they built. Professional, fast, and stunning!",
    company: "Tech Innovators",
  },
  {
    name: "Mike Johnson",
    quote: "Their attention to detail and creative approach made our website stand out from the competition.",
    company: "Creative Solutions",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center text-center p-6 bg-black/50 rounded-lg shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-white mb-4">What Our Clients Say</h2>
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            <p className="text-lg text-white italic">"{testimonials[index].quote}"</p>
            <h3 className="text-yellow-400 mt-2 font-bold">- {testimonials[index].name}, {testimonials[index].company}</h3>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={nextTestimonial}
        className="mt-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md"
      >
        Next
      </button>
    </div>
  );
}
