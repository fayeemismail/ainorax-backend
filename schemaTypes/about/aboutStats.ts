export default {
  name: "aboutStats",
  title: "About Stats",
  type: "object",
  fields: [
    // STATS ARRAY
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string"
            },
            {
              name: "label",
              title: "Label",
              type: "string"
            },

            // INDIVIDUAL STAT THEME
            {
              name: "theme",
              title: "Stat Theme",
              type: "object",
              fields: [
                {
                  name: "valueGradient",
                  title: "Value Gradient",
                  type: "string",
                  description: "Example: from-amber-400 to-orange-400"
                },
                {
                  name: "labelColor",
                  title: "Label Color",
                  type: "string"
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
        {
          name: "cardBgGradient",
          title: "Card Background Gradient",
          type: "string",
          description: "Example: from-white/10 to-white/5"
        },
        {
          name: "borderColor",
          title: "Border Color",
          type: "string"
        },

        // rotating glow effect
        {
          name: "glow",
          title: "Glow Effect",
          type: "string",
        },

        // fallback styles
        {
          name: "defaultValueGradient",
          title: "Default Value Gradient",
          type: "string"
        },
        {
          name: "labelColor",
          title: "Default Label Color",
          type: "string"
        }
      ]
    }
  ]
};