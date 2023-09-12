import { Navigation } from "../components/nav";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">about page</h1>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 "></div>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">Hi there, this is a test!</p>
      <Image
      className="px-6 pt-16 mx-auto space-y-8 max-w-xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32"
          src="/companylogo.png"
          alt="An image showing JYT"
          width={900}
          height={900}
        />
    </div>
  );
}
