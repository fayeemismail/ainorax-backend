// schemaTypes/home/services.ts

export default {
  name: "services",
  title: "Services Section",
  type: "object",
  fields: [
    // 📝 Section Content
    {
      name: "title",
      type: "string",
      initialValue: "What We Do",
    },
    {
      name: "description",
      type: "text",
    },

    // 🧩 Services List
    {
      name: "items",
      title: "Service Items",
      type: "array",
      of: [{ type: "serviceItem" }],
    },

    // ⚙️ Controls
    {
      name: "showScrollHint",
      type: "boolean",
      initialValue: true,
    },

    // 🎨 Theme
    {
      name: "theme",
      title: "Services Theme",
      type: "object",
      fields: [
        // Section
        { name: "sectionBg", type: "string" },

        // Heading
        { name: "headingColor", type: "string" },
        { name: "headingGradient", type: "string" },

        // Description
        { name: "description", type: "string" },

        // Card
        { name: "cardBg", type: "string" },
        { name: "cardBorder", type: "string" },
        { name: "cardHoverOverlay", type: "string" },

        // Icon
        { name: "iconGradient", type: "string" },

        // Title hover gradient
        { name: "titleHoverGradient", type: "string" },

        // Arrows
        { name: "arrowBg", type: "string" },
        { name: "arrowBorder", type: "string" },
        { name: "arrowText", type: "string" },

        // Scroll hint
        { name: "scrollHintText", type: "string" },
      ],
    },
  ],
};