 // schemaTypes/home/homeCTA.ts

export default {
  name: "cta",
  title: "Home CTA Section",
  type: "object",
  fields: [
    // 🧱 Content
    {
      name: "heading",
      type: "string"
    },

    // Highlighted text (gradient part)
    {
      name: "highlightText",
      type: "string",
      description: "Text that gets gradient styling"
    },

    {
      name: "description",
      type: "text"
    },

    // 🔘 Buttons
    {
      name: "primaryButton",
      type: "button"
    },
    {
      name: "secondaryButton",
      type: "button"
    },

    // ⚙️ Toggles
    {
      name: "enableGlow",
      type: "boolean",
      initialValue: true
    },

    // 🎨 Theme
    {
      name: "theme",
      title: "CTA Theme",
      type: "object",
      fields: [
        // Section
        { name: "sectionBg", type: "string" },

        // Glow background
        { name: "glowGradient", type: "string" },

        // Heading
        { name: "heading", type: "string" },

        // Gradient text
        { name: "highlightGradient", type: "string" },

        // Description
        { name: "description", type: "string" },

        // Primary button
        { name: "primaryBg", type: "string" },
        { name: "primaryText", type: "string" },

        // Secondary button
        { name: "secondaryBg", type: "string" },
        { name: "secondaryHover", type: "string" },
        { name: "secondaryText", type: "string" },
        { name: "secondaryBorder", type: "string" }
      ]
    }
  ]
};