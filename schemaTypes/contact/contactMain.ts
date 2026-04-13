export default {
  name: "contactMain",
  title: "Contact Main Section",
  type: "object",
  fields: [
    // LEFT PANEL (Coming Soon)
    {
      name: "comingSoon",
      title: "Coming Soon Panel",
      type: "object",
      fields: [
        {
          name: "badge",
          type: "object",
          fields: [
            { name: "text", type: "string" }
          ]
        },
        {
          name: "heading",
          type: "string"
        },
        {
          name: "highlightText",
          type: "string"
        },
        {
          name: "description",
          type: "text"
        }
      ]
    },

    // RIGHT PANEL INTRO
    {
      name: "rightIntro",
      title: "Right Side Intro",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "description", type: "text" }
      ]
    },

    // CONTACT CARDS
    {
      name: "contactCards",
      title: "Contact Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              title: "Icon Name (LuMail, LuPhone, etc.)"
            },
            { name: "title", type: "string" },
            { name: "value", type: "string" },
            { name: "description", type: "string" },

            // 🎨 Card Theme
            {
              name: "theme",
              type: "object",
              fields: [
                { name: "gradient", type: "string" }, // from-cyan-500 to-blue-500
                { name: "borderColor", type: "string" },
                { name: "hoverBg", type: "string" }
              ]
            }
          ]
        }
      ]
    },

    // QUICK RESPONSE CARD
    {
      name: "quickResponse",
      title: "Quick Response Card",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text" },

        {
          name: "theme",
          type: "object",
          fields: [
            { name: "gradient", type: "string" }, // from-amber-400 to-orange-400
            { name: "bg", type: "string" },
            { name: "border", type: "string" }
          ]
        }
      ]
    }
  ]
};