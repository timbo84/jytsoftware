import Link from "next/link";
import React from "react";
// import { Linkedin } from "lucide-react";
// import { Instagram } from "lucide-react";
// import { Facebook } from "lucide-react";
// import { Mail } from "lucide-react";
import Particles from "./components/particles";

const navigation = [
  { name: "Meet The Founders", href: "/developers" },
  { name: "About", href: "/about" },
  //   { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// const socials = [
//   {
//     icon: <Facebook size={20} />,
//     href: "https://www.facebook.com/profile.php?id=61559267145709&mibextid=ZbWKwL",
//     label: "FaceBook",
//     handle: "JYTSoftware",
//   },
//   {
//     icon: <Instagram size={20} />,
//     href: "https://instagram.com/jytsoftware",
//     label: "Instagram",
//     handle: "JYTSoftware",
//   },
//   {
//     icon: <Linkedin size={20} />,
//     href: "https://www.linkedin.com/company/jyt-software-development-designs",
//     label: "LinkedIn",
//     handle: "JYTSoftware",
//   },
//   {
//     icon: <Mail size={20} />,
//     href: "mailto:timothy.roberts@jytsoftware.com",
//     label: "Email",
//     handle: "@jytsoftware.com",
//   },
// ];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text xs:from-red-300 xs:to-yellow-300 xs:hover:text-yellow-300 sm:from-red-300 sm:to-yellow-300 sm:hover:text-yellow-300 md:from-red-500 md:to-yellow-500 md:hover:text-yellow-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      />

      <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl sm:bg-white md:bg-white whitespace-nowrap bg-clip-text ">
        JYT Software
      </h1>
      <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl sm:bg-white md:bg-white whitespace-nowrap bg-clip-text ">
        Development & Designs
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text xs:from-red-300 xs:to-yellow-300 sm:from-red-300 sm:to-yellow-300 md:from-red-500 md:to-yellow-500">
          JYT Software: "Jumpstart Your Tomorrow, Today!"
        </h2>
        <div className="flex justify-center items-center pt-12 pb-12">
          <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md">
            <a href="/contact">Contact us Today!</a>
          </button>
        </div>
        {/* <nav className=" animate-fade-in">
          <ul className="flex items-center justify-center gap-8">
            {socials.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-500 bg-clip-text xs:from-red-300 xs:to-yellow-300 xs:hover:text-yellow-300 sm:from-red-300 sm:to-yellow-300 sm:hover:text-yellow-300 md:from-red-500 md:to-yellow-500 md:hover:text-yellow-300"
              >
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
              </Link>
            ))}
          </ul>
        </nav> */}
      </div>
    </div>
  );
}
