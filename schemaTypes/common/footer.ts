export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    // 🧩 Brand
    {
      name: "brand",
      title: "Brand",
      type: "object",
      fields: [
        { name: "main", type: "string" },       // Ainor
        { name: "highlight", type: "string" },  // ax
        { name: "description", type: "text" }
      ]
    },

    // 🔗 Quick Links
    {
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "path", type: "string" }
          ]
        }
      ]
    },

    // 🌐 Social Links
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              title: "Icon Name (FaGithub, FaLinkedin...)"
            },
            { name: "href", type: "string" },
            { name: "label", type: "string" }
          ]
        }
      ]
    },

    // 📞 Contact Info
    {
      name: "contact",
      title: "Contact Info",
      type: "object",
      fields: [
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
        { name: "location", type: "string" }
      ]
    },

    // 📄 Bottom Bar
    {
      name: "bottom",
      title: "Bottom Bar",
      type: "object",
      fields: [
        { name: "copyright", type: "string" },

        {
          name: "links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", type: "string" },
                { name: "href", type: "string" }
              ]
            }
          ]
        }
      ]
    },

    // 🎨 Theme
    {
      name: "theme",
      title: "Footer Theme",
      type: "object",
      fields: [
        { name: "background", type: "string" }, // #0d1829
        { name: "border", type: "string" },

        { name: "textPrimary", type: "string" },
        { name: "textSecondary", type: "string" },
        { name: "textMuted", type: "string" },

        { name: "highlight", type: "string" }, // amber color

        // Social buttons
        { name: "socialBg", type: "string" },
        { name: "socialHoverBg", type: "string" },
        { name: "socialIcon", type: "string" },
        { name: "socialIconHover", type: "string" }
      ]
    }
  ]
};