// schemaTypes/services/servicesComingSoon.ts
export default {
  name: "servicesComingSoon",
  title: "Services Coming Soon",
  type: "object",
  fields: [
    // 📝 Content
    {
      name: "badge",
      type: "object",
      fields: [
        { name: "text", type: "string" } // "In Progress"
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
            { name: "highlight", type: "boolean" }
          ]
        }
      ]
    },

    {
      name: "description",
      type: "text"
    },

    // 🏷 Tech Tags
    {
      name: "technologies",
      title: "Upcoming Technologies",
      type: "array",
      of: [{ type: "string" }]
    },

    // 🎨 Theme (FULL CONTROL)
    {
      name: "theme",
      type: "object",
      fields: [
        // Card / Container
        { name: "cardBgGradient", type: "string" }, // from-white/10 to-white/5
        { name: "cardBorder", type: "string" },

        // Badge
        { name: "badgeBg", type: "string" },
        { name: "badgeBorder", type: "string" },
        { name: "badgeText", type: "string" },

        // Heading
        { name: "headingPrimary", type: "string" },
        { name: "headingGradient", type: "string" },

        // Description
        { name: "descriptionColor", type: "string" },

        // Icon (Settings)
        { name: "iconColor", type: "string" },
        { name: "iconGlow", type: "string" },

        // Progress Bar
        { name: "progressBg", type: "string" },
        { name: "progressGradient", type: "string" },

        // Tech Tags
        { name: "tagBg", type: "string" },
        { name: "tagBorder", type: "string" },
        { name: "tagText", type: "string" },

        // Particles
        { name: "particleColor", type: "string" }
      ]
    }
  ]
};