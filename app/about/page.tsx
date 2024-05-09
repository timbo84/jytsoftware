import { Navigation } from "../components/nav";
import Image from "next/image";
import Particles from "../components/particles";

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">about page</h1>
          {/* <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p> */}
        </div>
      </div>
    
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      />

      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 "></div>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">At <strong>JYT Software</strong>, we believe that the foundation of a successful online presence is a robust and innovative website. Our mission is to Jumpstart Your Tomorrow by providing cutting-edge web solutions today. As a premier website building company, we are dedicated to crafting digital experiences that resonate with your audience and deliver tangible results. </p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">Founded by a trio of visionary coders, our company stands as a testament to the power of collaboration. Each founder brings their own distinct style and technical prowess, creating a synergy that transforms ordinary code into extraordinary user experiences. Our diverse coding techniques converge to produce websites that are not only aesthetically pleasing but also functionally superior.</p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl "> But we don’t stop at website creation. With our expanding expertise in digital marketing, we empower your brand to thrive in the competitive online marketplace. Our strategic approach to Search Engine Optimization (SEO) ensures that your website not only looks great but also ranks high on search engines, connecting you with your ideal audience.</p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl ">We pride ourselves on our ability to listen and adapt, ensuring that every project reflects the unique essence of our clients. At JYT Software, we don’t just build websites; we create digital legacies that propel your business forward in the digital era, enhanced by our comprehensive digital marketing strategies.</p>
      <p className=" text-zinc-400 px-6 pt-16 mx-auto space-y-2 max-w-7xl "> Join us on this journey of digital craftsmanship, where your vision meets our innovation, and together, we set new benchmarks in the world of web development and online marketing.</p>
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
