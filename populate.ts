import fs from "fs";
import path from "path";
const SITE_URL = "https://blogs.azcodes.dev";

interface BlogPost {
  topicKey: string;
  title: string;
  description: string;
  badges: string[];
  link: string;
  createdAt: string;
  featured: boolean;
}

// Read the blogs json file
const blogsJsonString = fs.readFileSync("./blogs.json", { encoding: "utf-8" });
const blogsJson: BlogPost[] = JSON.parse(blogsJsonString);

// Verify JSON before output
// check if JSON output matched type  interface

// idk how to do this, will work on it later

// Check if more than one item is featured
if (blogsJson.filter((b) => b.featured).length > 1)
  throw new Error("Only one blog post can be featured");

let sitemap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>2026-10-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;
// populate a sitemap.json file
blogsJson.forEach((blog) => {
  sitemap += `
    <url>
        <loc>${SITE_URL}${blog.link}</loc>
        <lastmod>${blog.createdAt}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
    </url>
    `;
});
sitemap += `</urlset>`;

fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap, {
  encoding: "utf-8",
});

// generate rss

// populate app/data/data.jsx so application can access it as part of the code

const code = `
export interface BlogPost {
  topicKey: string;
  title: string;
  description: string;
  badges: string[];
  link: string;
  createdAt: string;
  featured: boolean;
}

const blogData: BlogPost[] = ${JSON.stringify(
  blogsJson.map((blog) => blog),
  null,
  2,
)};

export default blogData;
`;

fs.writeFileSync(path.join("app", "data", "data.tsx"), code, {
  encoding: "utf-8",
});

console.log("Blog Post Populated");
