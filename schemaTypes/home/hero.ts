// schemaTypes/home/hero.ts
export default {
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    // 📝 Content
    {
      name: "badge",
      title: "Top Badge",
      type: "object",
      fields: [
        { name: "text", type: "string" }
      ]
    },

    {
      name: "heading",
      title: "Heading Lines",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", type: "string" },
            {
              name: "highlight",
              type: "boolean",
              title: "Gradient Highlight?"
            }
          ]
        }
      ]
    },

    {
      name: "description",
      type: "text"
    },

    {
      name: "primaryButton",
      type: "button"
    },

    // 🎨 Theme (same pattern as navbar)
    {
      name: "theme",
      title: "Hero Theme",
      type: "object",
      fields: [
        { name: "badgeBg", type: "string" },
        { name: "badgeBorder", type: "string" },
        { name: "badgeText", type: "string" },

        { name: "headingPrimary", type: "string" },
        { name: "headingGradient", type: "string" },

        { name: "description", type: "string" },

        { name: "buttonBg", type: "string" },
        { name: "buttonHover", type: "string" },

        { name: "iconColor", type: "string" }
      ]
    },

    // ⚙️ Controls
    {
      name: "showFloatingIcons",
      type: "boolean",
      initialValue: true
    }
  ]
};