"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Zap, Award } from "lucide-react";

const badges = [
  { icon: <Shield size={32} />, label: "SSL Secured" },
  { icon: <CheckCircle size={32} />, label: "99.9% Uptime" },
  { icon: <Zap size={32} />, label: "Lightning Fast" },
  { icon: <Award size={32} />, label: "Award Winning" },
];

export default function TrustIndicators() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wide">
          Trusted by Businesses Across America
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-black/40 border border-white/10 hover:border-yellow-500/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-yellow-500 mb-2">{badge.icon}</div>
              <span className="text-white text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
