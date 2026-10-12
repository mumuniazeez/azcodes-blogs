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
  readTime: string;
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

// populate a feed.xml file
let feed = `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AzCodes Blog</title>
    <link>${SITE_URL}</link>
    <description>Posts about web development, backend engineering, and tech education.</description>
    <language>en</language>
    <lastBuildDate>Mon, 12 Oct 2026 09:00:00 GMT</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
`;

blogsJson.forEach((blog) => {
  feed += `
    <item>
      <title>${blog.title}</title>
      <link>${SITE_URL}${blog.link}</link>
      <guid isPermaLink="true">${SITE_URL}${blog.link}</guid>
      <pubDate>${blog.createdAt}</pubDate>
      <description>${blog.description}</description>
      ${blog.badges
        .map((b) => `<category>${b}</category>`)
        .toString()
        .replace(",", "\n")}
    </item>
    `;
});

feed += `
  </channel>
</rss>`;

fs.writeFileSync(path.join("public", "rss.xml"), feed, {
  encoding: "utf-8",
});
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
  readTime: string;
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
