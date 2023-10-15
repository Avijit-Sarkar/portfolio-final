"use client";

import { Facebook, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface CustomLinkProps {
  title: string;
  href: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, title }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex text-[22px] leading-6 font-normal relative text-zinc-500 hover:text-black group"
      >
        {title}
        <span className="h-[1px] inline-block absolute left-0 text-lg -bottom-0.5  transition-[width] group-hover:w-full ease-in-out duration-300 w-0 bg-black">
          &nbsp;
        </span>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <section className="bg-[#f1f1ef]">
      <div className="max-w-7xl w-screen  mx-auto flex-grow  flex flex-col">
        <main className="flex flex-col w-full pt-[10vh] text-black tracking-tight">
          <div className="w-full h-full inline-block rounded-md ">
            <div className="flex-grow flex flex-wrap text-left md:px-8">
              <div className="lg:w-[30%] md:w-1/3 w-full px-4 ">
                <div className="mb-10 lg:mb-0 space-y-4">
                  <h2 className="text-[24px] leading-9 font-semibold">
                    Bredit
                  </h2>
                  <p className="text-[25px] leading-8 font-normal text-gray-400">
                    Experience the future of storytelling.
                  </p>
                </div>
              </div>

              <div className="lg:w-1/5 md:w-1/3 w-full px-4 ">
                <nav className="list-none mb-10 lg:mb-0 space-y-4">
                  <h2 className="text-[24px] leading-9 font-medium">About</h2>
                  <CustomLink href="" title="Contact" />
                  <CustomLink href="" title="Blog" />
                  <CustomLink href="" title="Our Story" />
                  <CustomLink href="" title="Careers" />
                </nav>
              </div>
              <div className="lg:w-1/5 md:w-1/3 w-full px-4 ">
                <nav className="list-none mb-10 lg:mb-0 space-y-4">
                  <h2 className="text-[24px] leading-9 font-medium">Company</h2>
                  <CustomLink href="" title="Press" />
                  <CustomLink href="" title="Brand Assets" />
                  <CustomLink href="" title="Terms of service" />
                  <CustomLink href="" title="Privacy Policy" />
                </nav>
              </div>
              <div className="lg:w-[30%] md:w-1/3 w-full px-4 space-y-4">
                <Link href={""} className="flex justify-center">
                  <div className="relative rounded-full py-4 px-6 text-[20px] leading-6 font-medium bg-white ring-1 w-full ring-gray-200/50 hover:shadow-md shadow-black flex items-center">
                    <Twitter className="mr-2 text-[#1C9CEA]" fill="#1C9CEA" />
                    <div>
                      <span>Follow us</span>
                      <span className="text-zinc-500"> on Twitter.</span>
                    </div>
                  </div>
                </Link>
                <Link href={""} className="flex justify-center">
                  <div className="relative rounded-full py-4 px-6 text-[20px] leading-6 font-medium bg-white ring-1 w-full ring-gray-200/50 hover:shadow-md shadow-black flex items-center">
                    <Github className="mr-2" fill="black" />
                    <div>
                      <span>Follow us</span>
                      <span className="text-zinc-500"> on GitHub.</span>
                    </div>
                  </div>
                </Link>
                <Link href={""} className="flex justify-center">
                  <div className="relative rounded-full py-4 px-6 text-[20px] leading-6 font-medium bg-white ring-1 w-full ring-gray-200/50 hover:shadow-md shadow-black flex items-center">
                    <Facebook className="mr-2 text-[#1C9CEA]" fill="#1C9CEA" />
                    <div>
                      <span>Follow us</span>
                      <span className="text-zinc-500"> on Facebook.</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-start px-4 md:px-10 py-[10vh] text-gray-500">
            <p>Being built remote on sunny shores around the world</p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Footer;
