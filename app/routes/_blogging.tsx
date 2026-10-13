import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import type { Route } from "./+types/_blogging";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AzCodes Blog | Software Engineering, Web & Mobile Development" },
    {
      name: "description",
      content:
        "AzCodes Blog shares practical insights on software engineering, web development, mobile app development, and product-building lessons.",
    },
    { property: "og:site_name", content: "AzCodes Blog" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://blogs.azcodes.dev/" },
    { rel: "canonical", href: "https://blogs.azcodes.dev/" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
