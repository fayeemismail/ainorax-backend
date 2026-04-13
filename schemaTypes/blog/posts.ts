// schemaTypes/blog/post.ts
export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },

    {
      name: "slug",
      type: "slug",
      options: { source: "title" }
    },

    {
      name: "excerpt",
      type: "text"
    },

    {
      name: "image",
      type: "image",
      options: { hotspot: true }
    },

    {
      name: "category",
      type: "string"
    },

    {
      name: "author",
      type: "string"
    },

    {
      name: "publishedAt",
      type: "datetime"
    },

    {
      name: "readTime",
      type: "string",
      description: "Example: 5 min read"
    },

    {
      name: "content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
};