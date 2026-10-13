import React from "react";
import type { Route } from "./+types/_blogging.posts.template";
import blogData from "~/data/data";
import { Badge } from "~/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, Eye } from "@hugeicons/core-free-icons";

export function meta({ loaderData }: Route.MetaArgs): Route.MetaDescriptors {
  const { blog } = loaderData;
  return [
    { title: blog?.title || "Untitled" },
    {
      property: "og:title",
      content: blog?.description || "Untitled (not saved)",
    },
    {
      name: "description",
      content: blog?.description || "Untitled (not saved)",
    },
    { name: "keywords", content: blog?.badges.toString() || "" },
  ];
}

export async function loader({ url }: Route.LoaderArgs) {
  const { pathname } = url;
  const blogPostData = blogData.find((b) => b.link === pathname);

  return { blog: blogPostData };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { blog } = loaderData;
  return (
    <div>
      <section className="neo-box p-10 bg-white space-y-5">
        <div className="flex gap-3">
          <Badge className="uppercase bg-black text-white">
            {blog?.topicKey || "Key Topic"}
          </Badge>
          <Badge>
            <HugeiconsIcon icon={Calendar} size={16} />
            <p>{blog?.createdAt || "Month Day, Year"}</p>
          </Badge>
          <Badge>
            <HugeiconsIcon icon={Eye} size={16} />
            <p>{blog?.createdAt || "Month Day, Year"}</p>
          </Badge>
        </div>
        <h1 className="text-3xl md:text-5xl">{blog?.title || "Untitled"}</h1>
        <p className="text-xl md:w-[50%]">
          {blog?.description ||
            "the blogs description is describing the blog :)"}
        </p>
      </section>
    </div>
  );
}
