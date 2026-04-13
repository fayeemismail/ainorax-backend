export default {
  name: "aboutStory",
  title: "About Story",
  type: "object",
  fields: [
    // CONTENT
    {
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "From Vision to Reality"
    },
    {
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }]
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }
    },

    // STATS
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },

            // stat-specific theme
            {
              name: "theme",
              title: "Stat Theme",
              type: "object",
              fields: [
                { name: "bgGradient", title: "Background Gradient", type: "string" },
                { name: "valueColor", title: "Value Color", type: "string" },
                { name: "labelColor", title: "Label Color", type: "string" },
                { name: "borderColor", title: "Border Color", type: "string" }
              ]
            }
          ]
        }
      ]
    },

    // SECTION THEME
    {
      name: "theme",
      title: "Section Theme",
      type: "object",
      fields: [
        { name: "headingColor", title: "Heading Color", type: "string" },
        { name: "textColor", title: "Paragraph Color", type: "string" },

        // image overlay gradient
        {
          name: "imageOverlay",
          title: "Image Overlay Gradient",
          type: "string",
          description: "Example: from-[#0f1c33] via-transparent to-transparent"
        },

        // card styling
        {
          name: "cardBg",
          title: "Stat Card Background",
          type: "string",
          description: "Example: from-white/10 to-white/5"
        },
        {
          name: "cardBorder",
          title: "Card Border Color",
          type: "string"
        },
      ]
    }
  ]
};