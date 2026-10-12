import React from "react";
import ArticleCard from "./ArticleCard";
import blogData from "~/data/data";

export default function FeatureArticle() {
  return (
    <section>
      {blogData
        .filter((b) => b.featured)
        .map((blog) => (
          <ArticleCard key={blog.link} blog={blog} />
        ))}
    </section>
  );
}
