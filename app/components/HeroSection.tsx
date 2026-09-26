import React from "react";
import { Badge } from "./ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Fire, Fire02Icon } from "@hugeicons/core-free-icons";

export default function HeroSection() {
  return (
    <section className="neo-box p-10 bg-white space-y-5">
      <Badge>
        <HugeiconsIcon icon={Fire02Icon} className="animate-bounce" />
        DEV NOTES & TECHNICAL ARTICLE
      </Badge>

      <h1 className="text-3xl md:text-5xl">blogs.azcodes.dev</h1>

      <p className="text-xl md:w-[50%]">
        Where I write about the <span className="font-bold">code I ship</span>,
        what <span className="font-bold">worked</span>, what{" "}
        <span className="font-bold">broke</span>, and what I{" "}
        <span className="font-bold">learned</span>. Notes on{" "}
        <span className="font-bold">
          teaching developers, tinkering with hardware
        </span>
        , and the occasional detour.
      </p>

      <div className="flex gap-3 items-center">
        <Badge>5 Blogs Published</Badge>
      </div>
    </section>
  );
}
