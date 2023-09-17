import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={`${className} relative group text-foreground my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-foreground absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

interface MobileNavProps {
  handleClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ handleClick }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
      className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/90 rounded-lg backdrop-blur-md py-32"
    >
      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink
          href="/"
          title="Home"
          className=""
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/about"
          title="About"
          className=""
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/projects"
          title="Projects"
          className=""
          toggle={handleClick}
        />
        <CustomMobileLink
          href="/articles"
          title="Articles"
          className=""
          toggle={handleClick}
        />
      </nav>
      <Link
        href={"/sign-in"}
        className={cn(
          buttonVariants({ size: "lg" }),
          "text-lg font-semibold tracking-tighter mt-2"
        )}
      >
        Join Us
      </Link>
    </motion.div>
  );
};

export default MobileNav;
