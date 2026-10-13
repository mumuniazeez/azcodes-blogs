import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeSimpleIcon,
  Document,
  Send,
  Close,
  Menu,
  BookOpen,
  Search,
  Rss,
} from "@hugeicons/core-free-icons";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";

export default function Header() {
  const { pathname, hash } = useLocation();

  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    setNavOpen(false);
  }, [pathname, hash]);
  return (
    <header className="flex items-center justify-between py-3 px-10 md:px-30 bg-background border-b-2 gap-x-5 sticky top-0 z-9999">
      <Link to="/" title="Go to blog homepage">
        <div className="bg-main border-border shadow-shadow border-2 p-2 font-bold flex items-center gap-x-2">
          <HugeiconsIcon icon={BookOpen} />{" "}
          <h1 className="text-2xl">blogs.azcodes.dev</h1>
        </div>
      </Link>

      <div className="lg:flex items-center gap-x-3 hidden">
        <InputGroup>
          <InputGroupInput placeholder="Search a post..." />
          <InputGroupAddon>
            <HugeiconsIcon icon={Search} />
          </InputGroupAddon>
        </InputGroup>
        <a href={"/rss.xml"} target="_blank">
          <Button>
            <HugeiconsIcon icon={Rss} />
            RSS
          </Button>
        </a>
      </div>
    </header>
  );
}
