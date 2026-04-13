export default {
  name: "contactCTA",
  title: "Contact CTA Section",
  type: "object",
  fields: [
    // 📝 Heading (split for gradient control)
    {
      name: "heading",
      title: "Heading",
      type: "object",
      fields: [
        { name: "beforeHighlight", type: "string" }, // "Ready to Transform Your"
        { name: "highlight", type: "string" },       // "Digital Presence?"
      ]
    },

    // 📝 Description
    {
      name: "description",
      type: "text"
    },

    // 🎨 Theme
    {
      name: "theme",
      title: "CTA Theme",
      type: "object",
      fields: [
        { name: "textPrimary", type: "string" },   // heading color
        { name: "textSecondary", type: "string" }, // paragraph color

        { name: "gradientText", type: "string" },  // from-amber-400 to-orange-400
      ]
    }
  ]
};