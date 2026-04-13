// schemaTypes/blog/recentPosts.ts
export default {
  name: "recentPostsSection",
  title: "Recent Posts",
  type: "object",
  fields: [
    // 📝 Section Heading
    {
      name: "heading",
      type: "string",
      initialValue: "Recent Articles"
    },

    // 🧩 Posts Array
    {
      name: "posts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            // Content
            { name: "title", type: "string" },
            { name: "excerpt", type: "text" },

            { name: "category", type: "string" },
            { name: "readTime", type: "string" },
            { name: "date", type: "string" },
            { name: "author", type: "string" },

            // Image
            {
              name: "image",
              type: "image",
              options: { hotspot: true }
            },

            // 🎨 Card Theme (PER CARD CONTROL)
            {
              name: "theme",
              type: "object",
              fields: [
                // Card
                { name: "cardBg", type: "string" },        // bg-white/5
                { name: "cardHoverBg", type: "string" },   // hover:bg-white/10
                { name: "cardBorder", type: "string" },    // border-white/10

                // Image Overlay
                { name: "overlayGradient", type: "string" }, // from-[#15233e]/80 to-transparent

                // Category Badge
                { name: "categoryBg", type: "string" },    // bg-amber-400/20
                { name: "categoryText", type: "string" },
                { name: "categoryBorder", type: "string" },

                // Title
                { name: "titleColor", type: "string" },
                { name: "titleHoverColor", type: "string" },

                // Excerpt
                { name: "excerptColor", type: "string" },

                // Meta (date, read time, author)
                { name: "metaColor", type: "string" },
                { name: "authorColor", type: "string" }
              ]
            }
          ]
        }
      ]
    }
  ]
};