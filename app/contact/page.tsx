"use client";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import emailjs from "emailjs-com";

const socials = [
  {
    icon: <Linkedin size={28} />,
    href: "https://www.linkedin.com/company/jyt-software-development-designs",
    label: "LinkedIn",
    handle: "JYTSoftware",
  },
  {
    icon: <Mail size={28} />,
    href: "mailto:timothy.roberts@jytsoftware.com",
    label: "Email",
    handle: "@jytsoftware.com",
  },
  {
    icon: <Instagram size={28} />,
    href: "https://instagram.com/jytsoftware",
    label: "Instagram",
    handle: "JYTSoftware",
  },
  {
    icon: <Facebook size={28} />,
    href: "https://www.facebook.com/profile.php?id=61559267145709&mibextid=ZbWKwL",
    label: "Facebook",
    handle: "JYTSoftware",
  },
];

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // Ensure environment variables are properly defined
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  // Check for undefined values and throw an error if any are missing
  if (!serviceID || !templateID || !userID) {
    console.error("Missing EmailJS configuration.");
    alert("Email service is not properly configured. Please try again later.");
    return;
  }

  try {
    // Retrieve form data
    const formData = {
      user_name: e.currentTarget.user_name.value,
      user_email: e.currentTarget.user_email.value,
      message: e.currentTarget.message.value,
    };

    // Send email using EmailJS
    const res = await emailjs.send(serviceID, templateID, formData, userID);

    if (res.status === 200) {
      alert("Email sent successfully!");
      e.currentTarget.reset(); // Reset the form
    } else {
      console.error("Failed to send email:", res);
      alert("Error sending email. Please try again later.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error sending email. Please try again later.");
  }
};


export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      {/* Navigation */}
      <Navigation />

      {/* Intro Section */}
      <div className="text-center py-16 px-6 mt-6">
        <h1 className="text-4xl font-bold tracking-tight text-white bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
          Let’s Connect!
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          We’re here to collaborate and bring your ideas to life. Reach out via
          our socials or drop us a message below.
        </p>
      </div>

      {/* Social Media Cards */}
      <div className="container flex items-center justify-center px-6 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-300 group"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-yellow-500 group-hover:scale-110 transition-transform">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium lg:text-2xl text-zinc-200 group-hover:text-white">
                    {s.handle}
                  </span>
                  <span className="mt-2 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 px-6 max-w-4xl mx-auto bg-black/50 p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-6">
          Drop Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="bg-zinc-800 text-white py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="bg-zinc-800 text-white py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="bg-zinc-800 text-white py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>
    </div>
  );
}
