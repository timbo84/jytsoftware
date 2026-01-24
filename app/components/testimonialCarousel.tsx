"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Veronica Dillon",
    business: "Social Event Rentals",
    location: "Nebraska",
    rating: 5,
    text: "JYT built us a stunning website that perfectly showcases our photo booths and event services. The elegant, modern design strikes the perfect balance between professionalism and fun. Our bookings have increased significantly!",
  },
  {
    name: "Kylynn Roberts",
    business: "KyKy Fitness",
    location: "Texas",
    rating: 5,
    text: "The team created a cutting-edge fitness platform with AI chatbot integration, macro calculator, and workout planner. The interactive tools and responsive design have completely transformed how I connect with my clients. Absolutely game-changing!",
  },
  {
    name: "Dan Lemaire",
    business: "Evince",
    location: "California",
    rating: 5,
    text: "JYT delivered exactly what I needed - a distraction-free blogging platform built exclusively for my writing. The custom design is clean, focused, and makes publishing effortless. Finally, a platform that gets out of my way and lets me write.",
  },
  {
    name: "Delta Sigma Theta Sorority, Inc.",
    business: "Lawton Fort Sill Oklahoma Alumnae Chapter",
    location: "Oklahoma",
    rating: 5,
    text: "Our new website has strengthened our organization's communication and community engagement. JYT created a professional platform that supports our events and connects our members seamlessly. The ongoing support has been exceptional.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center" style={{
          background: 'linear-gradient(to right, #ef4444, #eab308)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          What Our Clients Say
        </h2>

        <div className="relative min-h-[300px] flex items-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full px-12"
            >
              <div className="bg-black/40 border border-white/10 rounded-lg p-8">
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FCD34D" className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-200 text-lg mb-6 italic text-center">
                  "{testimonials[current].text}"
                </p>

                <div className="text-center">
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-gray-400 text-sm">{testimonials[current].business}</p>
                  <p className="text-gray-500 text-xs">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-8 bg-yellow-500" : "w-2 bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
