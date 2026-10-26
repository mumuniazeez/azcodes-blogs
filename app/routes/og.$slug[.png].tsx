import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";
import type { Route } from "./+types/og.$slug[.png]";
import blogs from "~/data/data";

let fontData: ArrayBuffer | undefined;

async function getFont() {
  if (!fontData) {
    const res = await fetch(
      "https://blogs.azcodes.dev/fonts/SpaceGrotesk-Regular.ttf",
    );
    if (!res.ok) throw new Error("Failed to load font");
    fontData = await res.arrayBuffer();
  }
  return fontData;
}
export async function loader({ params }: Route.LoaderArgs) {
  const post = blogs.find((b) => b.slug === params.slug); // your own data fetch
  if (!post) throw new Response("Not found", { status: 404 });

  const svg = await satori(
    <div
      style={{
        width: 1200 - 52,
        height: 630 - 52,
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        gap: 32,
        padding: 14,
        background: "#FFDE59",
        border: "12px solid #000",
      }}
    >
      <div
        style={{ fontSize: 38, display: "flex", alignItems: "center", gap: 10 }}
      >
        <img
          src="https://blogs.azcodes.dev/images/favicon.png"
          style={{ width: 60 }}
        />
        blogs.azcodes.dev
      </div>
      <div
        style={{
          fontSize: 72,
          lineHeight: 1.1,
          display: "block",
          fontWeight: "bold",
          lineClamp: 3,
        }}
      >
        {post.title}
      </div>
      <div
        style={{
          fontSize: 24,
          lineHeight: 1.1,
          display: "block",
          paddingRight: 50,
          lineClamp: 2,
        }}
      >
        {post.description}
      </div>
      <div style={{ fontSize: 28, display: "flex" }}>{post.createdAt}</div>
      <button
        style={{
          border: "2px solid black",
          width: "fit-content",
          padding: 10,
          fontSize: 24,
        }}
      >
        Start Reading - {post.readTime} read
      </button>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: await getFont(), weight: 700, style: "normal" },
      ],
    },
  );

  const png = new Resvg(svg).render().asPng();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
