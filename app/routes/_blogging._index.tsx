import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/_blogging._index";
import FeatureArticle from "~/components/FeatureArticle";
import Articles from "~/components/Articles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blogs | Mumuni Abdulazeez Adewale" },
    { name: "description", content: "Welcome to React Router!" },
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
