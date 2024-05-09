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
		className="w-full h-auto object-cover"
			src="/joe-cool4.png"
			alt="An image showing Joesph"
			width={347}
			height={460
			}
		  />,
		href: "https://timothy-roberts.vercel.app",
		label: "Software Developer",
		handle: "Joesph Ellis",
	},
    {
		image: <Image
		className="w-full h-auto object-cover"
			src="/yissel-cool1.png"
			alt="An image showing Yissel"
			width={347}
			height={460}
		  />,
		href: "https://timothy-roberts.vercel.app",
		label: "Software Developer",
		handle: "Yissel Nunez",
	},
    {
		image: <Image
		className="w-full h-auto object-cover"
			src="/tim-cool2.jpg"
			alt="An image showing Tim"
			width={347}
			height={460}
		  />,
		href: "https://timothy-roberts.vercel.app",
		label: "Software Developer",
		handle: "Tim Roberts",
	},
];

export default function Example() {
	return (<>
        <div className=" bg-gradient-to-r from-zinc-300/0 via-zinc-700/50 to-zinc-300/0">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">THE FOUNDERS</h1>
        </div>
      </div>
      <div className="w-full h-px bg-zinc-800" />
    </div>
		<div className=" bg-gradient-to-r from-zinc-300/0 via-zinc-700/50 to-zinc-300/0">
			{/* <Navigation /> */}
			<div >
				<div className="grid w-full grid-cols-3 gap-8 mt-32 sm:mt-32 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						
						<Card>
							
							<Link
								href={s.href}
								target="_blank"
								className="flex flex-col items-center justify-center  group"
							>
								
								<span className=" ">
									{s.image}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-100 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-100 text-zinc-400 group-hover:text-zinc-200">
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
