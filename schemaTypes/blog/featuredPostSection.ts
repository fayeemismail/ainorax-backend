// schemaTypes/blog/featuredPost.ts
export default {
  name: "featuredPostSection",
  title: "Featured Post",
  type: "object",
  fields: [
    // 📝 Content
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
      name: "date",
      type: "string"
    },
    {
      name: "author",
      type: "string"
    },

    // 🖼 Image
    {
      name: "image",
      type: "image",
      options: { hotspot: true }
    },

    // 🎨 Theme (FULL UI CONTROL)
    {
      name: "theme",
      type: "object",
      fields: [
        // Card
        { name: "cardBg", type: "string" },          // bg-white/5
        { name: "cardBorder", type: "string" },      // border-white/10

        // Image Overlay
        { name: "overlayGradient", type: "string" }, // from-[#15233e] via-[#15233e]/50 to-transparent

        // Category Badge
        { name: "categoryBg", type: "string" },      // bg-amber-400/20
        { name: "categoryText", type: "string" },

        // Meta (date, read time, author)
        { name: "metaText", type: "string" },

        // Title
        { name: "titleColor", type: "string" },
        { name: "titleHoverColor", type: "string" },

        // Excerpt
        { name: "excerptColor", type: "string" }
      ]
    }
  ]
};