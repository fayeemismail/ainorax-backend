export default {
  name: "aboutValues",
  title: "About Values",
  type: "object",
  fields: [
    // HEADER
    {
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "What Drives Us"
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      initialValue: "Our core values shape everything we do"
    },

    // VALUES LIST
    {
      name: "values",
      title: "Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Use icon name: target, eye, users"
            },
            {
              name: "title",
              title: "Title",
              type: "string"
            },
            {
              name: "description",
              title: "Description",
              type: "text"
            },

            // INDIVIDUAL CARD THEME
            {
              name: "theme",
              title: "Card Theme",
              type: "object",
              fields: [
                { name: "cardBg", title: "Card Background", type: "string" },
                { name: "cardHoverBg", title: "Hover Background", type: "string" },
                { name: "borderColor", title: "Border Color", type: "string" },
                { name: "iconBgGradient", title: "Icon Background Gradient", type: "string" },
                { name: "iconColor", title: "Icon Color", type: "string" },
                { name: "titleColor", title: "Title Color", type: "string" },
                { name: "titleHoverColor", title: "Title Hover Color", type: "string" },
                { name: "textColor", title: "Text Color", type: "string" },
                { name: "glowGradient", title: "Glow Gradient", type: "string" }
              ]
            }
          ]
        }
      ]
    },

    // GLOBAL SECTION THEME
    {
      name: "theme",
      title: "Section Theme",
      type: "object",
      fields: [
        { name: "headingColor", title: "Heading Color", type: "string" },
        { name: "subheadingColor", title: "Subheading Color", type: "string" },

        // fallback defaults
        { name: "defaultCardBg", title: "Default Card BG", type: "string" },
        { name: "defaultBorder", title: "Default Border", type: "string" }
      ]
    }
  ]
};