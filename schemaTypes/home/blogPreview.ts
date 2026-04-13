// schemaTypes/home/blogPreview.ts

export default {
  name: "blogPreview",
  title: "Blog Preview Section",
  type: "object",
  fields: [
    // 🧱 Header
    {
      name: "heading",
      type: "string"
    },
    {
      name: "subheading",
      type: "text"
    },

    // 🔗 CTA (View All)
    {
      name: "cta",
      type: "button"
    },

    // 📰 Posts
    {
      name: "posts",
      type: "array",
      of: [{ type: "blogCard" }],
      validation: (Rule: any) => Rule.max(6)
    },

    // ⭐ Featured toggle
    {
      name: "enableFeatured",
      type: "boolean",
      initialValue: true
    },

    // 🎨 Theme
    {
      name: "theme",
      title: "Blog Theme",
      type: "object",
      fields: [
        // Section
        { name: "sectionBg", type: "string" },

        // Header
        { name: "heading", type: "string" },
        { name: "subheading", type: "string" },

        // CTA
        { name: "ctaText", type: "string" },
        { name: "ctaHover", type: "string" },

        // Featured card
        { name: "featuredCardBg", type: "string" },
        { name: "featuredCardBorder", type: "string" },
        { name: "featuredOverlay", type: "string" },

        // Category badge
        { name: "categoryBg", type: "string" },
        { name: "categoryText", type: "string" },

        // Text colors
        { name: "title", type: "string" },
        { name: "titleHover", type: "string" },
        { name: "excerpt", type: "string" },
        { name: "meta", type: "string" },

        // Secondary cards
        { name: "cardBg", type: "string" },
        { name: "cardBorder", type: "string" },
        { name: "cardHover", type: "string" }
      ]
    }
  ]
};