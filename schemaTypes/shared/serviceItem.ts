// schemaTypes/shared/serviceItem.ts
export default {
  name: "serviceItem",
  title: "Service Item",
  type: "object",
  fields: [
    { name: "title", type: "string" },
    { name: "description", type: "text" },

    // Icon name (map in frontend)
    {
      name: "icon",
      type: "string",
      options: {
        list: [
          { title: "Code", value: "code" },
          { title: "Brain", value: "brain" },
          { title: "Shopping Cart", value: "cart" },
          { title: "Cloud", value: "cloud" }
        ]
      }
    },

    // Gradient per card
    {
      name: "gradient",
      title: "Card Gradient",
      type: "string",
      description: "Example: linear-gradient(to right, #A855F7, #EC4899)"
    }
  ]
};