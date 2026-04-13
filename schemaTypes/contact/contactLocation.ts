export default {
  name: "contactLocation",
  title: "Contact Location Section",
  type: "object",
  fields: [
    // LOCATION CARD
    {
      name: "locationCard",
      title: "Location Card",
      type: "object",
      fields: [
        {
          name: "icon",
          type: "string",
          title: "Icon Name",
          initialValue: "LuMapPin"
        },
        {
          name: "title",
          type: "string",
          initialValue: "Our Location"
        },
        {
          name: "address",
          type: "array",
          of: [{ type: "string" }],
          description: "Each line of address"
        },
        {
          name: "description",
          type: "string"
        },

        // 🎨 Theme
        {
          name: "theme",
          type: "object",
          fields: [
            { name: "iconColor", type: "string" },
            { name: "bg", type: "string" },
            { name: "border", type: "string" },
            { name: "textPrimary", type: "string" },
            { name: "textSecondary", type: "string" }
          ]
        }
      ]
    },

    // BUSINESS HOURS CARD
    {
      name: "businessHours",
      title: "Business Hours Card",
      type: "object",
      fields: [
        {
          name: "icon",
          type: "string",
          initialValue: "LuPhone"
        },
        {
          name: "title",
          type: "string",
          initialValue: "Business Hours"
        },
        {
          name: "hours",
          type: "array",
          of: [{ type: "string" }]
        },
        {
          name: "timezone",
          type: "string"
        },

        // 🎨 Theme
        {
          name: "theme",
          type: "object",
          fields: [
            { name: "iconColor", type: "string" },
            { name: "bg", type: "string" },
            { name: "border", type: "string" },
            { name: "textPrimary", type: "string" },
            { name: "textSecondary", type: "string" }
          ]
        }
      ]
    },

    // BACKGROUND DECORATION (optional control)
    {
      name: "background",
      title: "Background Glow",
      type: "string",
    }
  ]
};