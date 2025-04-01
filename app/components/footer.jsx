'use client'

import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 p-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        
        {/* About Section */}
        <div className="text-center sm:text-left">
          <h4 className="text-yellow-400 font-bold text-xl">JYT Software</h4>
          <p className="mt-2 text-sm">
            Empowering businesses with innovative web solutions. Jumpstart Your Tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
      <a href="/about" className="hover:text-yellow-400 transition duration-300">About Us</a>
      <a href="/privacy-policy" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a>
      <a href="/terms-of-use" className="hover:text-yellow-400 transition duration-300">Terms of Use</a>
      <a href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
    </nav>


        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <motion.a
            href="https://www.facebook.com/profile.php?id=61559267145709&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Facebook size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/jyt-software-development-designs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com/jytsoftware"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a
            href="mailto:timothy.roberts@jytsoftware.com"
            className="hover:text-yellow-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Mail size={24} />
          </motion.a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-800 mt-6 pt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} JYT Software. All rights reserved.
        </p>
      </div>
    </footer>
  );
}