import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeSimpleIcon,
  Moon02Icon,
  Document,
  Send,
  Time,
  Github,
  Email,
  Linkedin,
  ArrowUp,
  ArrowUp02Icon,
  Close,
  Menu,
} from "@hugeicons/core-free-icons";
import { Link, Outlet, useLocation } from "react-router";
import { cn } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import { useEffect, useState } from "react";
import Header from "~/components/Header";

export default function Footer() {
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours24Format = date.getHours();
      const hours12Format =
        hours24Format > 12 ? hours24Format - 12 : hours24Format;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      setLiveTime(
        `${hours12Format < 10 ? "0" : ""}${hours12Format}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${hours24Format > 12 ? "PM" : "AM"}`,
      );
    }, 500);
  }, []);

  return (
      <footer className="flex md:items-center justify-between py-10 px-10  md:px-30 bg-secondary-background border-t-2 flex-col md:flex-row gap-y-5">
        <div className="space-y-3 md:w-[25%]">
          <div className="flex items-center gap-x-2">
            <a href="#">
              <div className="bg-main border-border shadow-shadow border-2 p-2 font-bold flex items-center gap-x-2">
                <HugeiconsIcon icon={CodeSimpleIcon} />{" "}
                <h1 className="text-2xl">azcodes.dev</h1>
              </div>
            </a>
            <Badge className="bg-background">PORTFOLIO V2.0</Badge>
          </div>
          <p className="text-black/70">
            Hand-crafted Neobrutalist developer portfolio for Abdulazeez Mumuni
            (AzCodes). Engineered with React, Typescript, Tailwind CSS, and
            Motion.
          </p>
          <div className="flex items-center gap-x-2 neo-box p-2 w-fit">
            <HugeiconsIcon icon={Time} />{" "}
            <p className="font-bold">LIVE TIME: {liveTime}</p>
          </div>
        </div>
        <div className="space-y-3 md:w-[25%]">
          <h5>NAVIGATION</h5>
          <div className="flex flex-col gap-2">
            <Link to={"#"}>// HOME</Link>
            <Link to={"#projects"}>// PROJECTS</Link>
            <Link to={"#tech-stack"}>// TECH STACK</Link>
            <Link to={"#experience"}>// EXPERIENCE</Link>
            <Link to={"#article"}>// ARTICLES</Link>
            <Link to={"#contact"}>// CONTACT</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h5>CONNECT WITH ABDULAZEEZ</h5>

          <div className="flex items-center justify-between gap-3 w-full">
            <Link to={"https://github.com/mumuniazeez"} target="_blank">
              <Button>
                <HugeiconsIcon icon={Github} />
              </Button>
            </Link>
            <Link to={"https://github.com/mumuniazeez"} target="_blank">
              <Button>
                <HugeiconsIcon icon={Linkedin} />
              </Button>
            </Link>
            <Link to={"mailto:mumuniazeez99@gmail.com"} target="_blank">
              <Button>
                <HugeiconsIcon icon={Email} />
              </Button>
            </Link>
          </div>
          <Link to={"#top"}>
            <Button className="w-full">
              BACK TO TOP <HugeiconsIcon icon={ArrowUp02Icon} />
            </Button>
          </Link>
        </div>
      </footer>
  )
}
