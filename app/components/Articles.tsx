import { BookOpen } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import ArticleCard from "./ArticleCard";
import blogData from "~/data/data";

export default function Articles() {
  return (
    <section className="space-y-5">
      <div className="border-b pb-2">
        <div className="flex items-center gap-3 text-sm">
          <HugeiconsIcon icon={BookOpen} size={16} />
          <p className="font-bold">ALL ARTICLES</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogData.map((blog) => (
          <ArticleCard key={blog.link} blog={blog} />
        ))}
      </div>
    </section>
  );
}
