import { Navigation } from "../components/nav";
import Image from "next/image";
import Particles from "../components/particles";

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 xs:space-y-16 xs:pt-24 sm:space-y-16 sm:pt-24 md:space-y-16 md:pt-24 lg:space-y-16 lg:pt-24">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text xs:from-red-300 xs:to-yellow-300 sm:from-red-300 sm:to-yellow-300 md:from-red-500 md:to-yellow-500">
            WHAT WE'RE ABOUT
          </h1>
        </div>
      </div>
      <div className="w-full h-px bg-zinc-800" />
      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      /> */}

      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">
        At <strong>JYT Software</strong>, we believe that the foundation of a
        successful online presence is a robust and innovative website. Our
        mission is to Jumpstart Your Tomorrow by providing cutting-edge web
        solutions today. As a premier website building company, we are dedicated
        to crafting digital experiences that resonate with your audience and
        deliver tangible results.{" "}
      </p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">
        Founded by a trio of visionary coders, our company stands as a testament
        to the power of collaboration. Each founder brings their own distinct
        style and technical prowess, creating a synergy that transforms ordinary
        code into extraordinary user experiences. Our diverse coding techniques
        converge to produce websites that are not only aesthetically pleasing
        but also functionally superior.
      </p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">
        {" "}
        But we don’t stop at website creation. With our expanding expertise in
        digital marketing, we empower your brand to thrive in the competitive
        online marketplace. Our strategic approach to Search Engine Optimization
        (SEO) ensures that your website not only looks great but also ranks high
        on search engines, connecting you with your ideal audience.
      </p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">
        We pride ourselves on our ability to listen and adapt, ensuring that
        every project reflects the unique essence of our clients. At JYT
        Software, we don’t just build websites; we create digital legacies that
        propel your business forward in the digital era, enhanced by our
        comprehensive digital marketing strategies.
      </p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">
        {" "}
        Join us on this journey of digital craftsmanship, where your vision
        meets our innovation, and together, we set new benchmarks in the world
        of web development and online marketing.
      </p>

      <div className="flex justify-center items-center pt-36">
        <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md">
          <a href="/contact">Contact us Today!</a>
        </button>
      </div>
    </div>
  );
}
