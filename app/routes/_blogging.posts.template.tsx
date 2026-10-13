import React from "react";
import type { Route } from "./+types/_blogging.posts.template";
import blogData from "~/data/data";
import { Badge } from "~/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, Eye, Time } from "@hugeicons/core-free-icons";

export function meta({ loaderData, location }: Route.MetaArgs): Route.MetaDescriptors {
  const { blog } = loaderData;
  const canonicalUrl = `https://blogs.azcodes.dev${location.pathname}`;
  const title = blog?.title || "Untitled article";
  const description =
    blog?.description ||
    "A software engineering article and insight from the AzCodes blog.";

  return [
    { title: `${title} | AzCodes Blog` },
    { name: "description", content: description },
    { name: "keywords", content: blog?.badges.join(", ") || "software engineering, blog, AzCodes" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: canonicalUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { rel: "canonical", href: canonicalUrl },
    { property: "article:published_time", content: blog?.createdAt || "2026-09-26" },
    { property: "article:section", content: blog?.topicKey || "Software development" },
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
        <div className="flex gap-3 flex-wrap">
          <Badge className="uppercase bg-black text-white">
            {blog?.topicKey || "Key Topic"}
          </Badge>
          <Badge className="uppercase">
            <HugeiconsIcon icon={Calendar} size={16} />
            <p>{blog?.createdAt || "Month Day, Year"}</p>
          </Badge>
          <Badge className="uppercase">
            <HugeiconsIcon icon={Time} size={16} />
            <p>{blog?.readTime || "Infinite"} READ</p>
          </Badge>
        </div>
        <h1 className="text-3xl md:text-5xl">{blog?.title || "Untitled"}</h1>
        <p className="text-xl md:w-[50%]">
          {blog?.description ||
            "the blogs description is describing the blog :)"}
        </p>
      </section>
      <article className="space-y-3"></article>
    </div>
  );
}
