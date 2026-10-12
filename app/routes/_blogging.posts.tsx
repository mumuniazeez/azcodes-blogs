import { Outlet } from "react-router";
import type { Route } from "./+types/_blogging.posts";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="px-50 py-10">
      <Button>
        <ArrowLeft /> See al Blogs
      </Button>
    </div>
  );
}
