// schemaTypes/blog/blogCategories.ts
export default {
  name: "blogCategories",
  title: "Blog Categories",
  type: "object",
  fields: [
    {
      name: "defaultActive",
      type: "string",
      initialValue: "All Posts"
    },

    {
      name: "categories",
      type: "array",
      of: [{ type: "string" }]
    },

    // 🎨 Theme (matches your UI states)
    {
      name: "theme",
      type: "object",
      fields: [
        // Active
        { name: "activeGradient", type: "string" }, // from-amber-400 to-orange-500
        { name: "activeText", type: "string" },

        // Inactive
        { name: "bg", type: "string" },            // bg-white/5
        { name: "hoverBg", type: "string" },       // hover:bg-white/10
        { name: "text", type: "string" },          // text-white/80
        { name: "border", type: "string" }         // border-white/10
      ]
    }
  ]
};