// schemaTypes/services/additionalCapabilities.ts
export default {
  name: "additionalCapabilities",
  title: "Additional Capabilities",
  type: "object",
  fields: [
    // 📝 Section Content
    {
      name: "heading",
      type: "string"
    },
    {
      name: "description",
      type: "text"
    },

    // 🎨 Section Theme
    {
      name: "sectionTheme",
      title: "Section Theme",
      type: "object",
      fields: [
        { name: "headingColor", type: "string" },
        { name: "descriptionColor", type: "string" }
      ]
    },

    // 🧩 Capabilities List
    {
      name: "capabilities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            // 🧠 Icon (string → map in frontend)
            {
              name: "icon",
              type: "string",
              description: "Example: LuSmartphone, LuDatabase, LuBot, LuTrendingUp"
            },

            // 📝 Content
            {
              name: "title",
              type: "string"
            },
            {
              name: "description",
              type: "string"
            },

            // 🎨 Card Theme (FULL CONTROL)
            {
              name: "theme",
              type: "object",
              fields: [
                // Card
                { name: "bg", type: "string" },              // e.g. bg-white/5
                { name: "hoverBg", type: "string" },        // hover:bg-white/10
                { name: "border", type: "string" },         // border-white/10

                // Text
                { name: "titleColor", type: "string" },
                { name: "titleHoverColor", type: "string" },
                { name: "descriptionColor", type: "string" },

                // Icon
                { name: "iconBgGradient", type: "string" }, // from-amber-400/20 to-orange-400/20
                { name: "iconColor", type: "string" }
              ]
            }
          ]
        }
      ]
    }
  ]
};