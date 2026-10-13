import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/_blogging._index";
import FeatureArticle from "~/components/FeatureArticle";
import Articles from "~/components/Articles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AzCodes Blog | Software Development Insights & Tutorials" },
    {
      name: "description",
      content:
        "Explore practical software engineering articles, React tutorials, TypeScript lessons, and product-building insights from AzCodes.",
    },
    {
      property: "og:title",
      content: "AzCodes Blog | Software Development Insights & Tutorials",
    },
    {
      property: "og:description",
      content:
        "Explore practical software engineering articles, React tutorials, TypeScript lessons, and product-building insights from AzCodes.",
    },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://blogs.azcodes.dev/" },
  ];
}

export default function Home() {
  return (
    <div className="py-10 md:px-40 px-10 space-y-8">
      <HeroSection />

      <FeatureArticle />

      <Articles />
    </div>
  );
}
