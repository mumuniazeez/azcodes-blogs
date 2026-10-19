import { Link, Outlet, redirect } from "react-router";
import type { Route } from "./+types/_blogging.posts";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Calendar, Time } from "@hugeicons/core-free-icons";
import blogData from "~/data/data";
import { Badge } from "~/components/ui/badge";

export async function loader({ url }: Route.LoaderArgs) {
  const { pathname } = url;
  console.log(pathname);
  if (pathname === "/posts" || pathname === "/posts/") throw redirect("/");
  const blogPostData = blogData.find((b) => b.link === pathname);

  return { blog: blogPostData };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { blog } = loaderData;
  return (
    <div className="md:px-50 px-5 py-10 space-y-5">
      <div>
        <Link to={"/"}>
          <Button>
            <HugeiconsIcon icon={ArrowLeft01Icon} /> See all Blogs
          </Button>
        </Link>
      </div>
      <div>
        <div className="space-y-15">
          <section className="neo-box p-10 bg-white space-y-5">
            <div className="flex gap-3 flex-wrap">
              <Badge className="uppercase bg-black text-white">
                {blog?.topicKey || "Key Topic"}
              </Badge>
              <Badge className="uppercase">
                <HugeiconsIcon icon={Calendar} size={16} />
                <p>{blog?.createdAt || "Month Day, Year"}</p>
              </Badge>
              <Badge className="uppercase">
                <HugeiconsIcon icon={Time} size={16} />
                <p>{blog?.readTime || "Infinite"} READ</p>
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl">
              {blog?.title || "Untitled"}
            </h1>
            <p className="text-xl md:w-[50%]">
              {blog?.description ||
                "the blogs description is describing the blog :)"}
            </p>
          </section>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
