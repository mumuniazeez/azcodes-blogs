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
  // My Journey in the Tech Space
  const { blog } = loaderData;
  return (
    <article className="space-y-3 text-xl">
      <p>
        Hey there. Welcome to this blog post, <br /> My name is Abdulazeez (aka
        AzCodes), I'm a full stack software developer, I build both mobile and
        web applications with over 4 years of experience and in this blog post
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
        serious interest in computers, I loved it and enjoys using it, I would
        write document, design graphics and so on and after sometime, my parents
        notice this interest and decided to buy me my first laptop.
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
        the concept behind this and have no idea how to get started and don;t
        have anyone to guide me through.
      </p>
      <p>
        Fast forward to when my school held a small ICT training, and I and some
        other students was called by our ICT teacher to help facilitate this
        training. And that's where I met a student from my school called
        Promise, and he was the one who actually opened my eye to coding and web
        development. We had a discussion on our way home from school and it was
        this discussion that changed everything and lead to actually start
        learning.
      </p>
      <p>
        Promise is just like me, he just started learning HTML, so i joined him
        and together we would download and share tutorials, i still remember the
        time i discovered vscode after using notepad for a long time, it felt
        really special to me, i remember running to school just to tell Promise
        about my discovers. Now i realize how silly that was, but it was a very
        good experience for me back then. We would discuss everyday about new
        stuff we learned and yap a lot, we became close friends.
      </p>
      <p>
        We continued to learn and help each other grow and we also met a new
        person who is also learning to code, his name is David, making us three,
        we continue to help each other learn and grow.
      </p>
      <p>
        Me and David started a Whatsapp group where we teach others HTML, and
        CSS although we ourselves are still learning, and i think this really
        helped me a lot personally, cause during the course of teaching I was
        also able to learn a lot.
      </p>
      <p>
        I really appreciate them for being part of this journey, it means a lot
        to me.
      </p>
      <div className="flex items-center flex-col my-5">
        <img
          src="/images/my-journey-images/me_promise_david.jpg"
          className="md:w-200 w-full"
          alt="TGDI Cohort 4 Facilitators/Volunteers group photo"
        />
        <p className="text-sm italic">
          Image of me, Promise and David at a competition
        </p>
      </div>
      <h1 className="text-4xl">How I've grown in this field ever since then</h1>
      <p>
        I personally didn't relent from continues learning, I started with
        frontend web development, spending must of my years perfecting my
        knowledge of HTML CSS, JavaScript, ReactJS, NextJS. I almost never see
        myself learning backend development. I build a lot of frontend projects,
        and learned a lot from those projects.
      </p>
      <p>
        I started to learn backend development in late 2024, starting with
        NodeJS, ExpressJS. and i feel in love to backend development that i
        prefer to do it than frontend development
      </p>
      <p>
        I also started to learn mobile app development using React Native, I
        helped in the development of a Escrow Payment mobile app.
      </p>
      <p>
        My main focus for now is on backend development, I want to be very good
        at it, and to be able to build the systems that powers a website or
        application, and that works efficiently.
      </p>
      <h1 className="text-4xl">The challenges i faced</h1>
      <p>
        With all that being said, this wasn't a smooth journey at all. It's
        filled with ups and downs, and a whole lot of challenges
      </p>
      <p>
        One of the main challenges i faced and i think every newbie faces is
        finding a community that guides and allows them to grow in the tech
        space. This was a really huge hurdle for me, as it's seams like apart
        from my friends not one else is doing what I'm doing.
      </p>
      <p>
        Another challenge is electricity and Internat access, this is a problem
        most Nigerian face when it comes to going into tech, with unstable
        electricity and poor and expensive internat provision, it really becomes
        hard to learn and explore
      </p>
      <h1 className="text-4xl">
        My overall overview of my journey into the tech space
      </h1>
      <p>
        I would say my journey was a special one with wonderful experience,
        coming from not knowing how to get started to being a full stack
        developer being self taught. I really appreciate myself for coming this
        far, and I appreciate my Dad for the advice that he gave me to go learn
        computer, cause without that, i wouldn't have been like this at all. I
        appreciate everyone who has been a part of this journey and that has
        helped my in one way or the other, without your supports i might not be
        here today.
      </p>
      <p>
        Thanks for patiently reading this, i really you took out of your time to
        read about my journey.
      </p>
    </article>
  );
}
