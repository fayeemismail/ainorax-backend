// schemaTypes/services/servicesHero.ts
export default {
  name: "servicesHero",
  title: "Services Hero",
  type: "object",
  fields: [
    // 📝 Content
    {
      name: "badge",
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
            { name: "highlight", type: "boolean" }
          ]
        }
      ]
    },

    {
      name: "description",
      type: "text"
    },


    // 🎨 Theme
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

        { name: "iconColor", type: "string" }
      ]
    }
  ]
};