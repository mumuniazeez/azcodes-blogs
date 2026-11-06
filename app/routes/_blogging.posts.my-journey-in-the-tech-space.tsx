import React from "react";
import type { Route } from "./+types/_blogging.posts.template";
import blogData from "~/data/data";

export function meta({
  loaderData,
  location,
}: Route.MetaArgs): Route.MetaDescriptors {
  const { blog } = loaderData;
  const canonicalUrl = `https://blogs.azcodes.dev${location.pathname}`;
  const title = blog?.title || "Untitled article";
  const description =
    blog?.description ||
    "A software engineering article and insight from the AzCodes blog.";
  const image = `https://blogs.azcodes.dev/og/${blog?.slug}.png`;

  return [
    { title: `${title} | AzCodes Blog` },
    { name: "description", content: description },
    {
      name: "keywords",
      content: blog?.badges.join(", ") || "software engineering, blog, AzCodes",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
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
  // my-journey-in-the-tech-space
  const { blog } = loaderData;
  return (
    <article className="space-y-3 text-xl">
      <p>
        Hey there. Welcome to this blog post, <br /> My name is Abdulazeez (aka
        AzCodes), I'm a full stack software developer, I build both mobile and
        web applications with 4 over years of experience and in this blog post
        I'll be sharing my journey in the tech space, how i started, how i
        learned, the challenges I faced, the victories I had and an overall
        overview on my journey in the tech space.
      </p>
      <p>
        To be honest, my experience and memories over all these years cannot be
        contained in this blog post, so I'll try my best to give you the best
        picture of how the journey went for me.
      </p>

      <h1 className="text-4xl">How the journey begin</h1>
      <p>
        It all begins in 2020, when i was trying to decide what trade or skill
        to learn as I was about to enter into high school (secondary school), I
        looked at some skill and the funny thing is initially I never had
        interest in tech probably because i wasn't exposed to it. I was thinking
        of learning barbing at a hair saloon. Until my dad suggested that I
        should go learn how to use computers, then i can go and learn whatever
        else i want to learn, so I agreed and was enrolled into a computer
        school. That's how the journey begin.
      </p>
      <p>
        After sometimes, of learning how to use a computer, i started to develop
        serious interest in this computers, I loved it and enjoys using it, I
        would write document, design graphics and so on and after sometime, my
        parents notice this interest and decided to buy me my first laptop.
      </p>
      <div className="flex items-center flex-col my-5">
        <img
          src="/images/my-journey-images/using_my_old_laptop.jpg"
          className="md:w-100 w-full"
          alt="TGDI Cohort 4 Facilitators/Volunteers group photo"
        />
        <p className="text-sm italic">Image of my using my old laptop</p>
      </div>
      <p>
        This continued for about 2 years where i learned how to use a computer,
        draft all kinds of document, design graphics, and so on.. It was a
        really fun experience for me, as it was this that captured my interest
        for tech.
      </p>
      <h1 className="text-4xl">I wanted to learn more than i already knew</h1>
      <p>
        After spending a lot of time learning the basics of using a computer i
        started to seek more knowledge to add to what i already knew, and that's
        when i heard about coding and programming. I didn't really understand
        the concept behind this and have no idea how to get started.
      </p>
    </article>
  );
}
