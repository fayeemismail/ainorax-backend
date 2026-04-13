// schemaTypes/services/servicesCTA.ts
export default {
  name: "servicesCTA",
  title: "Services CTA",
  type: "object",
  fields: [
    // 📝 Content
    {
      name: "heading",
      type: "string"
    },
    {
      name: "description",
      type: "text"
    },

    {
      name: "primaryButton",
      type: "button"
    },

    // 🎨 Theme (FULL CONTROL)
    {
      name: "theme",
      type: "object",
      fields: [
        { name: "background", title: "Background Color", type: "string" },

        // Text
        { name: "headingColor", type: "string" },
        { name: "descriptionColor", type: "string" },

        // Button
        { name: "buttonGradient", type: "string" }, // from-amber-400 to-orange-500
        { name: "buttonTextColor", type: "string" },

      ]
    }
  ]
};