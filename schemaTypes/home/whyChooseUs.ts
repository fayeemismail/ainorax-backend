// schemaTypes/home/whyChooseUs.ts
export default {
  name: "whyChooseUs",
  title: "Why Choose Us Section",
  type: "object",
  fields: [
    // 📝 Section Content
    {
      name: "title",
      type: "string",
      initialValue: "Why Choose Ainorax"
    },
    {
      name: "subtitle",
      type: "string",
      initialValue: "The difference is in the details"
    },

    // 🧩 Items
    {
      name: "items",
      type: "array",
      of: [{ type: "whyChooseItem" }]
    },

    // ⚙️ Controls
    {
      name: "showBackgroundDecoration",
      type: "boolean",
      initialValue: true
    },

    // 🎨 Theme (like navbar pattern)
    {
      name: "theme",
      title: "Why Choose Us Theme",
      type: "object",
      fields: [

        // Background decoration
        { name: "backgroundDecoration", type: "string" },

        // Heading
        { name: "heading", type: "string" },
        { name: "subtitle", type: "string" },

        // Card
        { name: "cardBg", type: "string" },
        { name: "cardBorder", type: "string" },

        // Number style
        { name: "numberColor", type: "string" },

        // Text
        { name: "itemTitle", type: "string" },
        { name: "itemDescription", type: "string" },

        // Hover overlay gradient
        { name: "hoverOverlayGradient", type: "string" }
      ]
    }
  ]
};