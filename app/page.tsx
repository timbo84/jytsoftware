import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Meet The Founders", href: "/developers" },
  { name: "About", href: "/about" },
//   { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent hover:text-red-700 bg-clip-text"
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
	  
      <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        JYT Software
      </h1>
      <h1 className="z-10 text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Development & Designs
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
          JYT Software: "Jumpstart Your Tomorrow, Today!"
        </h2>
      </div>
    </div>

	
  );
}
