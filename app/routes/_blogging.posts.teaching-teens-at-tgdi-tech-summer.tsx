import React from "react";
import type { Route } from "./+types/_blogging.posts.my-first-blog";
import blogData from "~/data/data";
import { Badge } from "~/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, Eye, Time } from "@hugeicons/core-free-icons";

export function meta({
  loaderData,
  location,
}: Route.MetaArgs): Route.MetaDescriptors {
  const { blog } = loaderData;
  const canonicalUrl = `https://blogs.azcodes.dev${location.pathname}`;
  const title = blog?.title || "My first blog";
  const description =
    blog?.description ||
    "A practical software engineering story, lessons, and product-building insights from AzCodes.";

  return [
    { title: `${title} | AzCodes Blog` },
    { name: "description", content: description },
    {
      name: "keywords",
      content: blog?.badges.join(", ") || "software engineering, blog, AzCodes",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: canonicalUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { rel: "canonical", href: canonicalUrl },
    {
      property: "article:published_time",
      content: blog?.createdAt || "2026-09-26",
    },
    {
      property: "article:section",
      content: blog?.topicKey || "Software development",
    },
  ];
}

export async function loader({ url }: Route.LoaderArgs) {
  const { pathname } = url;
  const blogPostData = blogData.find((b) => b.link === pathname);

  return { blog: blogPostData };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { blog } = loaderData;
  // /posts/teaching-teens-at-tgdi-tech-summer
  return (
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
        <h1 className="text-3xl md:text-5xl">{blog?.title || "Untitled"}</h1>
        <p className="text-xl md:w-[50%]">
          {blog?.description ||
            "the blogs description is describing the blog :)"}
        </p>
      </section>
      <article className="space-y-3 text-xl">
        <p>
          Hi there, in this blog post i'll be sharing my experience as a
          facilitator/volunteer at the TGDI Tech Summer, where i taught over 40
          student, and they were able to build fantastic projects at the end of
          the training.
        </p>
        <h1 className="text-4xl">What is Tech Summer for Teens</h1>
        <p>
          So Tech Summer for Teens, is an annual 2 weeks long training, where
          teenagers in under served area in Lagos, get taught basic
          programming/designing knowledge, and it is hosted by{" "}
          <span className="font-bold">
            Tooltip Grassroots Developments Initiative (TGDI)
          </span>
          , a non-profit organization. It's being held in different town per
          year targeting rural under served areas, with more than 4 years of
          helping teenagers for free.
        </p>
        <p>
          Teens from the age of 13-18 who attend are being taught Web
          Developments and also UI/UX design for the course of 2 weeks, and at
          the end they get to build awesome project that actually solves real
          life problem.
        </p>
        <h1 className="text-4xl">How did I help?</h1>
        <p>
          I volunteered to facilitate the web development class for Cohort 4
          (2026) of the training, where I help teach teenagers, HTML, CSS,
          TailwindCSS, and Prompt Engineering. I worked with other volunteers to
          help the students, learn, and grow over the course of the two weeks
          training.
        </p>
        <div className="text-center">
          <img src="/images/tgdi-images/maxwell-teachi" />
        </div>
        <h1 className="text-4xl">How do the training go?</h1>
        <p>
          For the first week, we held intensive classes with the students,
          covering the basics of web development, we taught them how the
          internet works, how the browsers works, how to build the structure of
          a website using HTML, and how to style using CSS and TailwindCSS.
        </p>
        <p>
          And this was the most stressful but fun part of the training, when you
          explain a simple concept over and over again, clearly see confusion in
          the faces of the students, and being able to clear away this
          confusion, and replace it with understanding is the best part of my
          experience as a facilitator.
        </p>
        <p>
          The second week was more focused on making them build their projects,
          I helped student, navigate how to build properly, how to fix bug fixes
          (there were a lot), and stood with them throughout their project
          developments. The students from the UI/UX class design a website while
          the web development student tries to build the website and bring it to
          live.
        </p>
        <p>
          Also during the second week I taught the students the us of AI, and
          how to use it ethically, and appropriately, also how it can help them
          build stuff faster.
        </p>
        <p>
          About 98% of the students came in with zero knowledge of coding, some
          haven't used a laptop before, and it's absolutely amazing to see this
          students actually build stuff independently, i was so happy about
          this, it shows as an evidence to me that we've done a very good job.
        </p>
        <p>
          Overall, this two weeks was absolutely awesome, we learned, build,
          have fun, played games, and had a wonderful experience together, i
          can't forget those experiences
        </p>
        <p>
          And at the end, 2 students, went home with a free laptop given by
          TGDI, it was a surprise for the students, and an encouragement for
          them to continue learning and
        </p>
        <h1 className="text-4xl">How do the training go?</h1>
      </article>
    </div>
  );
}
