// schemaTypes/shared/blogCard.ts

export default {
  name: "blogCard",
  title: "Blog Card",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string"
    },
    {
      name: "excerpt",
      type: "text"
    },
    {
      name: "category",
      type: "string"
    },
    {
      name: "readTime",
      type: "string"
    },
    {
      name: "image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }
  ]
};