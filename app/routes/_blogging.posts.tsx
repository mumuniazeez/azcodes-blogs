import { Link, Outlet } from "react-router";
import type { Route } from "./+types/_blogging.posts";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

export default function BlogPost() {
  return (
    <div className="px-50 py-10 space-y-5">
      <div>
        <Link to={"/"}>
          <Button>
            <HugeiconsIcon icon={ArrowLeft01Icon} /> See all Blogs
          </Button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
