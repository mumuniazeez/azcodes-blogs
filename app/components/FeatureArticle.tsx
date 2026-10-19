import React from "react";
import ArticleCard from "./ArticleCard";
import blogData from "~/data/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen } from "@hugeicons/core-free-icons";

export default function FeatureArticle() {
  return (
    blogData.filter((b) => b.featured).length === 1 && (
      <section id="featured" className="space-y-5">
        <div className="border-b pb-2">
          <div className="flex items-center gap-3 text-sm">
            <HugeiconsIcon icon={BookOpen} size={16} />
            <p className="font-bold">FEATURED ARTICLES</p>
          </div>
        </div>
        {blogData
          .filter((b) => b.featured)
          .map((blog) => (
            <ArticleCard key={blog.link} blog={blog} />
          ))}
      </section>
    )
  );
}
