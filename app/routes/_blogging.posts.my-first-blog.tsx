import React from "react";
import type { Route } from "./+types/_blogging.posts.my-first-blog";
import blogData from "~/data/data";
import { Badge } from "~/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, Eye, Time } from "@hugeicons/core-free-icons";

export function meta({ loaderData, location }: Route.MetaArgs): Route.MetaDescriptors {
  const { blog } = loaderData;
  const canonicalUrl = `https://blogs.azcodes.dev${location.pathname}`;
  const title = blog?.title || "My first blog";
  const description =
    blog?.description ||
    "A practical software engineering story, lessons, and product-building insights from AzCodes.";

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
    <div className="space-y-15">
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
      <article className="space-y-3 text-xl">
        <h1 className="text-4xl">Welcome to my first blog post</h1>
        <p>
          I'm Abdulazeez (aka AzCodes), I'm a full stack software developer, i
          build both web and mobile app, i build this blogging website to share
          my thoughts, ideas, my journey and experiences, with everyone.
        </p>
        <p>
          I alway love to share my ideas and insight in order to help others
          learn, I love to code and build stuff. outside of using a computer, I
          love to teach, and to help people, I also love tp host events that
          bring people together and foster a better community
        </p>
        <p>
          This blogs site would me a place where i talk about tech related
          topics, my experience, and share piece of my day to day life as a tech
          enthusiast.
        </p>
        <p>So stay tuned. More Blogs to come soon</p>
      </article>
    </div>
  );
}
