// schemaTypes/blog/blogPage.ts
export default {
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "blogHero" },
        { type: "blogCategories" },
        { type: "featuredPostSection" },
        { type: "recentPostsSection" }
      ]
    }
  ]
};