import React from "react";
import { Badge } from "./ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight, Calendar, Clock, Star } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";

export default function ArticleCard() {
  return (
    <div className="shadow-shadow border-2 border-border group hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all cursor-pointer">
      <div className="flex items-center justify-between py-3 px-5 bg-main">
        <div className="flex items-center gap-2">
          <Badge className="uppercase bg-black text-white">
            React Router v7
          </Badge>
          <Badge variant={"neutral"}>
            <HugeiconsIcon icon={Star} /> FEATURED
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <HugeiconsIcon icon={Clock} size={16} />
          <p className="uppercase">7 Min Read</p>
        </div>
      </div>
      <div className="bg-secondary-background py-3 px-5 ">
        <div className="border-b pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-black/70">
            <HugeiconsIcon icon={Calendar} size={16} />{" "}
            <p>September 24, 2026</p>
          </div>
        </div>

        <div className="space-y-4  my-4">
          <h1 className="text-xl md:text-3xl group-hover:text-main transition-colors">
            React Router v7 in Framework Mode: SSR, Loaders & Full-Stack Routing
          </h1>
          <p className="text-black/70">
            A comprehensive developer guide to building production-grade web
            applications with React Router v7's unified framework architecture
            without Next.js lock-in.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Badge>#React Router v7</Badge>
            <Badge>#SSR</Badge>
            <Badge>#TypeScript</Badge>
            <Badge>#Architecture</Badge>
          </div>
        </div>

        <div className="border-t pt-2 flex items-center justify-between">
          <p className="text-sm text-black/70">September 24, 2026</p>

          <Button className={"group-hover:bg-black group-hover:text-white"}>
            READ POST <HugeiconsIcon icon={ArrowRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}
