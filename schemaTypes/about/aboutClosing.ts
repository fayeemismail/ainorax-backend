export default {
  name: "aboutClosing",
  title: "About Closing",
  type: "object",
  fields: [
    // CONTENT
    {
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Let's Build Something Amazing Together"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },

    // ICON
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Example: award"
    },

    // CTA BUTTON (optional future-proof)
    {
      name: "cta",
      title: "CTA Button",
      type: "object",
      fields: [
        { name: "text", title: "Button Text", type: "string" },
        { name: "link", title: "Link", type: "string" },

        // button theme
        {
          name: "theme",
          title: "Button Theme",
          type: "object",
          fields: [
            { name: "bgGradient", title: "Background Gradient", type: "string" },
            { name: "textColor", title: "Text Color", type: "string" },
            { name: "hoverGradient", title: "Hover Gradient", type: "string" }
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
        { name: "background", title: "Background Color", type: "string" },

        { name: "headingColor", title: "Heading Color", type: "string" },
        { name: "descriptionColor", title: "Description Color", type: "string" },

        // icon styles
        { name: "iconColor", title: "Icon Color", type: "string" },
        { name: "iconBg", title: "Icon Background", type: "string" },

        // optional glow / gradient
        {
          name: "glow",
          title: "Glow Effect",
          type: "string",
        }
      ]
    }
  ]
};