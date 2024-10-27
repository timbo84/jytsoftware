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
    href: "https://sites.google.com/view/josephellis/home",
    label: "Software Developer | AppDev",
    handle: "Joesph Ellis",
    bio: "I am Joseph Ellis, an amazing father of two, and a devoted husband whose heart is as committed to my family as my mind is to coding. In the world of software development, I am known for my fiery passion for front-end design and my comprehensive full-stack capabilities. I face every problem with the courage of a warrior, never backing down until I’ve seen it through. My dedication to my craft is unwavering, a trait that I carry into my personal life, where I am not just a partner but a true complement to my spouse, enhancing our lives together with the same love and attention to detail that I give to my code.",
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
    href: "https://www.linkedin.com/in/yissellucia/",
    label: "Software Developer | Graphic Designer",
    handle: "Yissel Nunez",
    bio: "I am Yissel Nunez, a software developer with a flair for graphic design and a co-founder of JYTSoftware Development & Designs. My passion for technology is deeply intertwined with my role as a mother, and I take pride in juggling both with grace. I stand firm in my values of loyalty and integrity, and when I set my sights on an objective, I commit to it fully, ensuring that every goal I chase is met with success through steadfast dedication and effort.",
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
    <div className="relative">
      <div className="bg-gradient-to-r from-zinc-300/0 via-zinc-700/50 to-zinc-300/0">
        <Navigation />
        <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 xs:space-y-16 xs:pt-24 sm:space-y-16 sm:pt-24 md:space-y-16 md:pt-24 lg:space-y-16 lg:pt-24">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl bg-gradient-to-r from-red-500 to-yellow-500  text-transparent bg-clip-text xs:from-red-300 xs:to-yellow-300 sm:from-red-300 sm:to-yellow-300 md:from-red-500 md:to-yellow-500">
              THE FOUNDERS
            </h1>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>
      <div className="bg-gradient-to-r from-zinc-300/0 via-zinc-700/50 to-zinc-300/0">
        <div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-32 sm:mt-32 lg:gap-16">
            {socials.map((s, index) => (
              <Card key={index}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="flex flex-col items-center justify-center group"
                >
                  <span className="">{s.image}</span>
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
