import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

const posts = await getCollection("blog", ({ data }) => !data.draft);

const pages = Object.fromEntries(
  posts.map((post) => [
    post.id,
    { title: post.data.title, description: post.data.description },
  ])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_path, page: { title: string; description: string }) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[17, 17, 16]],
    border: {
      color: [104, 99, 94],
      width: 6,
      side: "inline-start",
    },
    padding: 80,
    font: {
      title: {
        color: [222, 218, 211],
        families: ["Cormorant Garamond"],
        size: 76,
        lineHeight: 1.2,
      },
      description: {
        color: [104, 99, 94],
        families: ["Cascadia Code"],
        size: 26,
        lineHeight: 1.5,
      },
    },
    fonts: [
      "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff",
      "node_modules/@fontsource-variable/cascadia-code/files/cascadia-code-latin-wght-normal.woff2",
    ],
  }),
});
