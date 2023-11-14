"use client";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { FC, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import { useOnClickOutside } from "@/hook/use-on-click-outside";
import AnimatedText from "./AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
// import { Icons } from "./Icons";

interface CustomLinkProps {
  title: string;
  href: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        pathname === href ? "!opacity-100" : null,
        "mr-6 text-lg font-medium relative group hover:opacity-100 opacity-50"
      )}
    >
      {title}

      <span
        className={cn(
          "h-[1px] inline-block absolute left-0 text-lg -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300",
          pathname === href ? "w-full" : "w-0",
          "bg-white"
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 0.1], ["-500%", "0%"]);

  const modelRef = useRef<HTMLButtonElement>(null);

  useOnClickOutside(modelRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="fixed w-full top-0 inset-x-0 h-fit  z-50 p-9">
      <div
        ref={targetRef}
        className="h-full mx-auto flex items-center justify-between gap-2"
      >
        {/* logo */}
        <Link href={"/"} className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-primary rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          {/* <p className="text-xl font-bold">Breadit</p> */}
          <AnimatedText text="Breadit" className="!text-xl font-bold" />
        </Link>

        <motion.nav
          style={{ y }}
          className="hidden transition-all md:inline-block"
        >
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
        </motion.nav>

        <Link
          href={"/sign-in"}
          className={cn(
            buttonVariants({ size: "lg" }),
            "text-lg font-semibold tracking-tighter hidden md:flex"
          )}
        >
          Join Us
        </Link>
        <Button
          className="flex-col justify-center items-center md:hidden flex"
          onClick={handleClick}
          size={"icon"}
          ref={modelRef}
        >
          <span
            className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </Button>

        {isOpen ? <MobileNav handleClick={handleClick} /> : null}
      </div>
    </div>
  );
};

export default Navbar;
