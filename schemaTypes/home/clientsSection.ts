// schemaTypes/home/clientsSection.ts

export default {
  name: "clientsSection",
  title: "Clients Section",
  type: "object",
  fields: [
    // 📝 Content
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Our Clients",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    },

    {
      name: "clients",
      title: "Clients List",
      type: "array",
      of: [{ type: "clientCard" }],
    },

    // 🎨 Theme (FULLY MATCHES YOUR COMPONENT)
    {
      name: "theme",
      title: "Theme",
      type: "object",
      fields: [
        { name: "sectionBg", title: "Section Background", type: "string" },

        { name: "heading", title: "Heading Color", type: "string" },
        { name: "subtitle", title: "Subtitle Color", type: "string" },

        { name: "cardBorder", title: "Card Border Color", type: "string" },

        {
          name: "overlayGradient",
          title: "Overlay Gradient",
          type: "string",
          description: "Example: linear-gradient(...)",
        },

        { name: "tagBg", title: "Tag Background", type: "string" },
        { name: "tagText", title: "Tag Text Color", type: "string" },

        { name: "nameColor", title: "Client Name Color", type: "string" },
        { name: "descColor", title: "Description Color", type: "string" },
      ],
    },
  ],
};