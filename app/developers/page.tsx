"use client";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

const socials = [
  {
    image: (
      <Image
        className="w-full h-auto object-cover"
        src="/joe-cool4.png"
        alt="An image showing Joesph"
        width={347}
        height={460}
      />
    ),
    href: "https://timothy-roberts.vercel.app",
    label: "Software Developer | Superstar",
    handle: "Joesph Ellis",
    bio: "At the heart of JYT Software lies a commitment to not just building websites, but nurturing lasting relationships. Founded on the principles of integrity and high moral standards, we, a team of dedicated professionals led by a passionate coder, strive to solve the most daunting of challenges. Our founder, a man of unwavering resolve, excels in turning obstacles into opportunities. His life, enriched by the joys of fatherhood to three wonderful children and partnership with his beloved wife Bernice, reflects the same dedication and love that he extends to every client and project. JYT Software stands as a testament to his belief that true success is built on a foundation of strong values and enduring bonds.",
  },
  {
    image: (
      <Image
        className="w-full h-auto object-cover"
        src="/yissel-cool1.png"
        alt="An image showing Yissel"
        width={347}
        height={460}
      />
    ),
    href: "https://timothy-roberts.vercel.app",
    label: "Software Developer | Graphic Designer",
    handle: "Yissel Nunez",
    bio: "At the heart of JYT Software lies a commitment to not just building websites, but nurturing lasting relationships. Founded on the principles of integrity and high moral standards, we, a team of dedicated professionals led by a passionate coder, strive to solve the most daunting of challenges. Our founder, a man of unwavering resolve, excels in turning obstacles into opportunities. His life, enriched by the joys of fatherhood to three wonderful children and partnership with his beloved wife Bernice, reflects the same dedication and love that he extends to every client and project. JYT Software stands as a testament to his belief that true success is built on a foundation of strong values and enduring bonds.",
  },
  {
    image: (
      <Image
        className="w-full h-auto object-cover"
        src="/tim-cool2.jpg"
        alt="An image showing Tim"
        width={347}
        height={460}
      />
    ),
    href: "https://timothy-roberts.vercel.app",
    label: "Software Developer | Digital Marketer",
    handle: "Tim Roberts",
    bio: " As a co-founder of JYT Software, I am driven by a passion for coding and a steadfast commitment to integrity and high moral values. My journey in the tech industry is marked by a relentless pursuit of excellence and an innate ability to solve complex problems. Beyond the code, I believe in forging strong relationships with clients, grounded in trust and mutual respect. My life’s work is a reflection of my character: a devoted father of three, a loving husband to my wife Bernice, and a leader who never shies away from a challenge. At JYT Software, we don’t just build websites; we build connections that stand the test of time.",
  },
];

export default function Example() {
  return (
    <div className="relative ">
      <div className=" bg-gradient-to-r from-zinc-300/0 via-zinc-700/50 to-zinc-300/0">
        <Navigation />
        <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              THE FOUNDERS
            </h1>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>
      <div className=" bg-gradient-to-r from-zinc-300/0 via-zinc-700/50 to-zinc-300/0">
        {/* <Navigation /> */}
        <div>
          <div className="grid w-full grid-cols-3 gap-8 mt-32 sm:mt-32 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="flex flex-col items-center justify-center  group"
                >
                  <span className=" ">{s.image}</span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl font-medium duration-100 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-100 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
                <span className="mt-4 text-sm text-center duration-100 text-zinc-400 group-hover:text-zinc-200">
                  {s.bio}
                </span>
              </Card>
            ))}
          </div>
          <div className="flex justify-center items-center pt-12 pb-24">
            <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md">
              <a href="/contact">Contact us Today!</a>
            </button>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      />
    </div>
  );
}
