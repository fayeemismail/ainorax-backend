// schemaTypes/services/mainServices.ts
export default {
  name: "mainServices",
  title: "Main Services",
  type: "object",
  fields: [
    {
      name: "services",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            // 🧠 Icon (store as string, map in frontend)
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "Example: LuCode, LuBrain, LuShoppingCart, LuCloud"
            },

            // 📝 Content
            {
              name: "title",
              type: "string"
            },
            {
              name: "description",
              type: "text"
            },

            // ✅ Features List
            {
              name: "features",
              type: "array",
              of: [{ type: "string" }]
            },

            // 🖼 Image
            {
              name: "image",
              type: "image",
              options: { hotspot: true }
            },

            // 🎨 Gradient Color (Tailwind or custom)
            {
              name: "gradient",
              title: "Gradient (Tailwind)",
              type: "string",
              description: "Example: from-blue-500 to-cyan-500"
            },

            // 🎨 Optional Theme Control (more flexible than gradient)
            {
              name: "theme",
              type: "object",
              fields: [
                { name: "iconBgGradient", type: "string" }, // override gradient
                { name: "iconColor", type: "string" },
                { name: "checkIconColor", type: "string" }
              ]
            }
          ]
        }
      ]
    }
  ]
};