# AzCodes BLog

This repo contains the code for my blogging website.

## Tech Stack

It is built with:

- React Router
- Shadcn (Neutralist Theme)
- Tailwind CSS

## Run it on your machine

To run this project on your machine, clone this repo

```bash
git clone https://github.com/mumuniazeez/azcodes-blogs.git
```

Then install all the dependencies (PNPM was used in this project)

```bash
pnpm install
```

Now run the project using

```bash
pnpm dev
```

## Adding a new blog

1. Create the blog file in `'~/app/routes/_blogging.posts.my-blog-url.tsx` (replace my-blog-url with the url you want the blog to show on)
2. Open `~/app/routes/_blogging.posts.template.tsx`, and copy the content into the file you just created
3. Starting writing inside the <article>, You write normal tsx code not mdx
4. Once you're done with the blog, you can add it to `~/blogs.json`
5. Then run `pnpm populate`, the blogs will be added to the once on the page, and to the sitemap and the rss and other files.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
