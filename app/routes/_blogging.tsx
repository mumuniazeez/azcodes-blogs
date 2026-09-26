import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import type { Route } from "./+types/_blogging";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blogs | Mumuni Abdulazeez Adewale" },
    { name: "description", content: "Welcome to React Router!" },
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
