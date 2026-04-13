export default {
  name: "aboutProcess",
  title: "About Process",
  type: "object",
  fields: [
    // HEADER
    {
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "How We Work"
    },
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      initialValue: "A proven approach to delivering exceptional results"
    },

    // PROCESS STEPS
    {
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Step Number",
              type: "string",
              description: "Example: 01, 02"
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

            // INDIVIDUAL STEP THEME
            {
              name: "theme",
              title: "Step Theme",
              type: "object",
              fields: [
                {
                  name: "gradient",
                  title: "Main Gradient",
                  type: "string",
                  description: "Example: from-blue-500 to-cyan-500"
                },
                {
                  name: "hoverGradient",
                  title: "Hover Title Gradient",
                  type: "string",
                  description: "Example: from-amber-400 to-orange-400"
                },
                {
                  name: "cardBg",
                  title: "Card Background",
                  type: "string"
                },
                {
                  name: "cardHoverBg",
                  title: "Card Hover Background",
                  type: "string"
                },
                {
                  name: "borderColor",
                  title: "Border Color",
                  type: "string"
                },
                {
                  name: "textColor",
                  title: "Description Color",
                  type: "string"
                },
                {
                  name: "numberColor",
                  title: "Large Number Color",
                  type: "string"
                },
                {
                  name: "glowGradient",
                  title: "Glow Gradient",
                  type: "string",
                  description: "Used for blurred background effect"
                }
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
        { name: "subheadingColor", title: "Subheading Color", type: "string" },


        // fallback styles
        { name: "defaultCardBg", title: "Default Card BG", type: "string" },
        { name: "defaultBorder", title: "Default Border", type: "string" },

        // floating background animation
        {
          name: "floatingBg",
          title: "Floating Background",
          type: "object",
          fields: [
            { name: "color", title: "Color", type: "string" },
          ]
        }
      ]
    }
  ]
};