import { motion } from "framer-motion";

export default function MeetFounderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const images = [
    "/timothy-profile.jpg",
    "/timothy-coding.jpg",
    "/timothy-speaker.jpg",
    "/timothy-team.jpg",
  ];

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose}></div>

      {/* Modal Content */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-zinc-900 text-white rounded-lg p-6 shadow-lg max-w-3xl w-full space-y-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 text-xl font-bold"
          >
            X
          </button>
          <button
            onClick={onClose}
            className="sm:hidden bg-red-500 text-white p-2 rounded-full hover:bg-yellow-400 transition duration-300"
          >
            ← Back
          </button>

          {/* Images Section */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Founder image ${index + 1}`}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            ))}
          </div>

          {/* Auto-Bio Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Timothy Roberts</h2>
            <p className="text-gray-300">
              Timothy Roberts has always had a knack for coding and
              problem-solving, driven by a deep passion for innovation and
              integrity. A family-first individual, Tim believes that the
              strength of any venture lies in the relationships it fosters—an
              ethos shaped by his 15 years of service as a correctional officer,
              where he honed resilience, discipline, and an unwavering
              commitment to others. After earning his certification as a
              full-stack developer from Bethel College, Tim turned his vision
              into reality by founding JYT Software. <br /> As the sole
              proprietor of JYT Software, Tim’s approach to business is rooted
              in treating clients as extensions of his own family, fostering
              trust, mutual respect, and personalized care in every project. His
              journey from a dedicated professional to a leader in innovative
              web development is a testament to his relentless drive and
              dedication. Whether crafting bespoke websites or empowering
              businesses through meaningful digital solutions, Tim ensures that
              every project reflects the vision, integrity, and heart that
              define JYT Software’s success
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
