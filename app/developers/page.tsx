"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image"
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";

const socials = [
	{
		image: <Image
		className="px-6 pt-16 mx-auto space-y-8 max-w-xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32"
			src="/joe-cool2.png"
			alt="An image showing Joesph"
			width={900}
			height={900}
		  />,
		href: "https://timothy-roberts.vercel.app",
		label: "Software Developer",
		handle: "Joesph Ellis",
	},
    {
		image: <Image
		className="px-6 pt-16 mx-auto space-y-8 max-w-xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32"
			src="/yissel-cool.png"
			alt="An image showing Yissel"
			width={900}
			height={900}
		  />,
		href: "https://timothy-roberts.vercel.app",
		label: "Software Developer",
		handle: "Yissel Nunez",
	},
    {
		image: <Image
		className="px-6 pt-16 mx-auto space-y-8 max-w-xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32"
			src="/tim-cool2.jpg"
			alt="An image showing Tim"
			width={900}
			height={900}
		  />,
		href: "https://timothy-roberts.vercel.app",
		label: "Software Developer",
		handle: "Tim Roberts",
	},
];

export default function Example() {
	return (<>
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">THE MAGIC MAKERS</h1>
        </div>
      </div>
      <div className="w-full h-px bg-zinc-800" />
    </div>
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			{/* <Navigation /> */}
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.image}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
        </>
	);
}
