import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeSimpleIcon,
  Document,
  Send,
  Close,
  Menu,
} from "@hugeicons/core-free-icons";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function Header() {
  const { pathname, hash } = useLocation();

  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    setNavOpen(false);
  }, [pathname, hash]);
  return (
    <header className="flex items-center justify-between py-3 px-10 md:px-30 bg-background border-b-2 gap-x-5 sticky top-0 z-9999">
      <a href="#">
        <div className="bg-main border-border shadow-shadow border-2 p-2 font-bold flex items-center gap-x-2">
          <HugeiconsIcon icon={CodeSimpleIcon} />{" "}
          <h1 className="text-2xl">azcodes.dev</h1>
        </div>
      </a>
      <nav
        className={`w-screen md:w-fit bg-secondary-background p-3 border-border border-2 shadow-shadow md:static fixed top-0 right-0 md:h-auto h-screen transition-transform
            md:translate-x-[unset] ${navOpen ? "translate-x-0" : "translate-x-full"}
            `}
        // style={{
        //   transform: navOpen ? "translateX(0)" : "translateX(100%)",
        // }}
      >
        <Button className="my-5 md:hidden" onClick={() => setNavOpen(false)}>
          <HugeiconsIcon icon={Close} />
        </Button>
        <ul className="md:flex gap-x-4 items-center">
          <li className="p-3">
            <Link className="p-3 hover:bg-main transition-all" to="#">
              Home
            </Link>
          </li>
          <li className="p-3">
            <Link className="p-3 hover:bg-main transition-all" to="#projects">
              Projects
            </Link>
          </li>
          <li className="p-3">
            <Link className="p-3 hover:bg-main transition-all" to="#tech-stack">
              Tech Stack
            </Link>
          </li>
          <li className="p-3">
            <Link className="p-3 hover:bg-main transition-all" to="#experience">
              Experience
            </Link>
          </li>
          <li className="p-3">
            <Link className="p-3 hover:bg-main transition-all" to="#article">
              Article
            </Link>
          </li>
          <li className="p-3">
            <Link className="p-3 hover:bg-main transition-all" to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Button
        className="my-5 md:hidden"
        style={{ opacity: navOpen ? 0 : undefined }}
        onClick={() => setNavOpen(true)}
      >
        <HugeiconsIcon icon={Menu} />
      </Button>
      <div className="lg:flex items-center gap-x-3 hidden">
        <Link to={"/resume.pdf"} target="_blank">
          <Button>
            <HugeiconsIcon icon={Document} /> Resume
          </Button>
        </Link>
        <Link to={"#contact"}>
          <Button>
            <HugeiconsIcon icon={Send} /> Hire Me
          </Button>
        </Link>
      </div>
    </header>
  );
}
