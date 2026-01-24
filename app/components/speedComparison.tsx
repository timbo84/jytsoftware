"use client";

import { motion } from "framer-motion";
import { Zap, Timer } from "lucide-react";

export default function SpeedComparison() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center" style={{
          background: 'linear-gradient(to right, #ef4444, #eab308)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Speed Matters
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A 1-second delay in page load time can result in a 7% reduction in conversions.
          Our websites are built for speed from day one.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* JYT Sites - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-yellow-500/30 rounded-lg p-8 relative overflow-hidden md:order-2"
          >
            <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
              OUR SITES
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Zap size={32} className="text-yellow-500" />
              <h3 className="text-xl font-semibold text-white">JYT Custom Sites</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Load Time</span>
                  <span className="text-yellow-400 font-bold">0.9s</span>
                </div>
                <div className="w-full bg-black rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "18%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Page Size</span>
                  <span className="text-yellow-400 font-bold">450 KB</span>
                </div>
                <div className="w-full bg-black rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "14%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Performance Score</span>
                  <span className="text-yellow-400 font-bold">98/100</span>
                </div>
                <div className="w-full bg-black rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm">
              ✅ Clean, optimized code means faster load times and better SEO
            </p>
          </motion.div>

          {/* Template/Builder Sites - Shows second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-red-900/30 rounded-lg p-8 md:order-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <Timer size={32} className="text-red-500" />
              <h3 className="text-xl font-semibold text-white">Template Builders</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Load Time</span>
                  <span className="text-red-400 font-bold">4.8s</span>
                </div>
                <div className="w-full bg-black rounded-full h-3">
                  <motion.div
                    className="bg-red-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "96%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Page Size</span>
                  <span className="text-red-400 font-bold">3.2 MB</span>
                </div>
                <div className="w-full bg-black rounded-full h-3">
                  <motion.div
                    className="bg-red-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Performance Score</span>
                  <span className="text-red-400 font-bold">52/100</span>
                </div>
                <div className="w-full bg-black rounded-full h-3">
                  <motion.div
                    className="bg-red-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "52%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              ❌ Bloated code and unnecessary plugins slow down template-based sites
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-lg p-6"
        >
          <p className="text-white text-lg font-semibold mb-2">
            5x Faster Load Times = More Conversions
          </p>
          <p className="text-gray-400">
            Google reports that 53% of mobile users abandon sites that take over 3 seconds to load.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
