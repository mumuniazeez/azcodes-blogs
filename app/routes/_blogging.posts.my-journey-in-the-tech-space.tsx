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

  // My Tech Journey: A Self Taught Nigerian Developer’s Story
  //
  // I went from wanting to learn barbing to becoming a full stack developer. Here is how I started, the challenges I faced in Nigeria, and what I learned.
  const { blog } = loaderData;
  return (
    <article className="space-y-3 text-xl">
      <p>
        In 2020, I was about to start secondary school and I planned to learn
        barbing. My dad had a different idea: learn how to use a computer first.
        That one suggestion is the reason I am now a full stack developer, a
        backend engineer and a coding instructor.
      </p>
      <p>
        My name is Abdulazeez, also known as AzCodes. I build both mobile and
        web applications, and in this post I'll share how I started, how I
        learned, the challenges I faced, the wins I've had, and what I would
        tell anyone starting out today.
      </p>
      <p>
        To be honest, all my experiences and memories over the years cannot fit
        into one blog post, so I'll try my best to give you a clear picture of
        how the journey went.
      </p>

      <h1 className="text-4xl">How the journey began</h1>
      <p>
        It all began in 2020. I was trying to decide which trade or skill to
        learn before entering secondary school, and I looked at a few options.
        The funny thing is that I had no interest in tech at first, probably
        because I had never been exposed to it. I was thinking of learning
        barbing at a barbershop. Then my dad suggested that I learn how to use a
        computer first, and that I could go on to learn whatever else I wanted
        afterwards. I agreed and was enrolled in a computer school. That's how
        the journey began.
      </p>
      <p>
        After some time of learning how to use a computer, I developed a serious
        interest in it. I loved it and enjoyed using it. I would write
        documents, design graphics and more. My parents noticed this interest
        and decided to buy me my first laptop.
      </p>
      <div className="flex items-center flex-col my-5">
        <img
          src="/images/my-journey-images/using_my_old_laptop.jpg"
          className="md:w-100 w-full"
          alt="AzCodes using my old laptop"
        />
        <p className="text-sm italic">Image of me using my old laptop</p>
      </div>
      <p>
        This went on for about two years, during which I learned how to draft
        all kinds of documents, design graphics and more. It was a really fun
        experience, and it is what captured my interest in tech.
      </p>
      <h1 className="text-4xl">I wanted to learn more than I already knew</h1>
      <p>
        After spending a lot of time on the basics of using a computer, I
        started looking for more to add to what I already knew, and that is when
        I heard about coding and programming. I didn't really understand the
        idea behind it, I didn't know how to get started, and I had no one to
        guide me.
      </p>
      <p>
        Then my school held a small ICT training, and some other students and I
        were called by our ICT teacher to help facilitate it. That is where I
        met a student from my school called Promise, and he was the one who
        actually opened my eyes to coding and web development. We talked on our
        way home from school, and that conversation changed everything and led
        me to actually start learning.
      </p>
      <p>
        Promise was in the same position as me. He had just started learning
        HTML, so I joined him, and together we would download and share
        tutorials. I still remember the day I discovered VS Code after using
        Notepad for a long time. It felt really special, and I ran to school
        just to tell Promise about my discovery. I realize now how silly that
        was, but it was a great experience back then. We would talk every day
        about the new things we had learned, and we became close friends.
      </p>
      <p>
        We kept learning and helping each other grow, and we met another person
        who was also learning to code. His name is David, and with him we became
        three, still helping each other learn and grow.
      </p>
      <p>
        David and I started a WhatsApp group where we taught others HTML and
        CSS, even though we were still learning ourselves. This helped me a lot
        personally, because teaching forced me to understand things properly.
      </p>
      <p>
        I really appreciate Promise and David for being part of this journey. It
        means a lot to me.
      </p>
      <div className="flex items-center flex-col my-5">
        <img
          src="/images/my-journey-images/me_promise_david.jpg"
          className="md:w-200 w-full"
          alt="Image of AzCodes, Promise and David at a competition"
        />
        <p className="text-sm italic">
          Image of me, Promise and David at a competition
        </p>
      </div>
      <h1 className="text-4xl">How I've grown in this field since then</h1>
      <p>
        I never stopped learning. I started with frontend web development and
        spent most of my early years perfecting HTML, CSS, JavaScript, React.js
        and Next.js. I never imagined myself learning backend development. I
        built a lot of frontend projects and learned a great deal from them.
      </p>
      <p>
        I started learning backend development in late 2024, beginning with
        Node.js and Express.js, and I fell in love with it so much that I now
        prefer it to frontend development.
      </p>
      <p>
        I also started learning mobile app development with React Native, and I
        helped build an escrow payment mobile app.
      </p>
      <p>
        My main focus now is backend development. I want to be very good at it
        and build the systems that power websites and applications and keep them
        running efficiently.
      </p>
      <h1 className="text-4xl">The wins along the way</h1>
      <p>
        It hasn't been all struggle. Some of the things I'm proudest of came
        from the same habit that started in that WhatsApp group: learning by
        teaching.
      </p>
      <p>
        I work at a computer institute, where I teach people how to code. I
        also volunteer as a tech educator with TGDI (Tooltip Grassroots
        Development Initiative), helping young people take their first steps in
        tech, and I'm active in the Hack Club community. Today I work as a
        Backend Engineer at Charmpay, building real systems
        for real users.
      </p>
      {/* Add one or two specific wins here, for example the escrow app's name, your role on it, and what you built. */}
      <h1 className="text-4xl">The challenges I faced</h1>
      <p>
        With all that said, this was not a smooth journey. It was filled with
        ups and downs and a whole lot of challenges.
      </p>
      <p>
        One of the main challenges I faced, and I think every newbie faces it,
        was finding a community that guides you and lets you grow in tech. This
        was a huge hurdle for me, because it seemed like apart from my friends,
        no one else was doing what I was doing. In the end, we built our own
        small community, which is how the WhatsApp group came about.
      </p>
      <p>
        Another challenge was electricity and internet access. This is a problem
        most Nigerians face when going into tech. With unstable electricity and
        poor, expensive internet service, it becomes really hard to learn and
        explore.
      </p>
      {/* Add how you handled this one, for example offline learning, a power bank, downloading tutorials in advance. */}
      <h1 className="text-4xl">What I would tell a beginner</h1>
      <p>
        Find at least one person who is learning alongside you. Promise and
        David made the difference for me.
      </p>
      <p>
        Teach what you learn, even when you feel you don't know enough yet.
        Explaining something to others is one of the fastest ways to understand
        it yourself.
      </p>
      <p>
        Build projects instead of only watching tutorials, and don't be afraid
        to change direction. I spent years on frontend and ended up loving
        backend.
      </p>
      <h1 className="text-4xl">My overall view of my journey into tech</h1>
      <p>
        My journey was a special one with wonderful experiences. I went from not
        knowing how to get started to becoming a self taught full stack
        developer, and I'm proud of myself for coming this far. I'm grateful to
        my dad for the advice to go and learn computers, because without it I
        would not be where I am today. I also thank everyone who has been part
        of this journey and helped me in one way or another. Without your
        support, I might not be here.
      </p>

      <p>Thank you for taking the time to read about my journey.</p>
    </article>
  );
}
