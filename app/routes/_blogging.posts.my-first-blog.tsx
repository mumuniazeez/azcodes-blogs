import React from "react";
import type { Route } from "./+types/_blogging.posts.my-first-blog";
import blogData from "~/data/data";

export function meta({ matches }: Route.MetaArgs): Route.MetaDescriptors {
  const blogPostData = blogData.find((b) => b.link === matches["3"].pathname);
  return [
    { title: blogPostData?.title || "Untitled" },
    {
      property: "og:title",
      content: blogPostData?.description || "Untitled (not saved)",
    },
    {
      name: "description",
      content: blogPostData?.description || "Untitled (not saved)",
    },
    { name: "keywords", content: blogPostData?.badges.toString() || "" },
  ];
}

export default function BlogPost() {
  return <div>Hello</div>;
}
