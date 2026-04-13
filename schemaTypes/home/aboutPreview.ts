// schemaTypes/home/aboutPreview.ts
export default {
  name: "aboutPreview",
  title: "About Preview Section",
  type: "object",
  fields: [
    // 🖼️ Image
    {
      name: "image",
      type: "image",
      options: { hotspot: true }
    },

    // 🏷️ Badge (top small tag)
    {
      name: "badge",
      type: "object",
      fields: [
        { name: "text", type: "string" }
      ]
    },

    // 📝 Content
    {
      name: "title",
      type: "string"
    },
    {
      name: "descriptionPrimary",
      type: "text"
    },
    {
      name: "descriptionSecondary",
      type: "text"
    },

    // 🎯 CTA Button
    {
      name: "cta",
      type: "button"
    },

    // 📊 Experience Badge (floating card)
    {
      name: "experience",
      type: "object",
      fields: [
        { name: "value", type: "string" }, // "5+"
        { name: "label", type: "string" }  // "Years Experience"
      ]
    },

    // ⚙️ Controls
    {
      name: "enableFloatingBadge",
      type: "boolean",
      initialValue: true
    },

    // 🎨 Theme (navbar style)
    {
      name: "theme",
      title: "About Theme",
      type: "object",
      fields: [
        // Section
        { name: "sectionBg", type: "string" },

        // Image overlay
        { name: "imageOverlay", type: "string" },

        // Badge (top small pill)
        { name: "badgeBg", type: "string" },
        { name: "badgeBorder", type: "string" },
        { name: "badgeText", type: "string" },

        // Heading & text
        { name: "title", type: "string" },
        { name: "descriptionPrimary", type: "string" },
        { name: "descriptionSecondary", type: "string" },

        // CTA
        { name: "ctaBg", type: "string" },
        { name: "ctaHover", type: "string" },
        { name: "ctaText", type: "string" },
        { name: "ctaBorder", type: "string" },

        // Floating badge
        { name: "floatingBadgeGradient", type: "string" },
        { name: "floatingBadgeText", type: "string" }
      ]
    }
  ]
};