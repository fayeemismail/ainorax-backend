// schemaTypes/blog/blogHero.ts
export default {
  name: "blogHero",
  title: "Blog Hero",
  type: "object",
  fields: [
    // 📝 Badge
    {
      name: "badge",
      type: "object",
      fields: [
        { name: "text", type: "string" }
      ]
    },

    // 📝 Heading
    {
      name: "heading",
      title: "Heading Lines",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", type: "string" },
            { name: "highlight", type: "boolean" }
          ]
        }
      ]
    },

    // 📝 Description
    {
      name: "description",
      type: "text"
    },

    // 🎨 Theme
    {
      name: "theme",
      type: "object",
      fields: [
        // Badge
        { name: "badgeBg", type: "string" },
        { name: "badgeBorder", type: "string" },
        { name: "badgeText", type: "string" },

        // Heading
        { name: "headingPrimary", type: "string" },
        { name: "headingGradient", type: "string" },

        // Description
        { name: "descriptionColor", type: "string" },

        // Background Glow
        { name: "glowGradient", type: "string" }, // from-purple-400/10 to-pink-400/10
      ]
    }
  ]
};