export default {
  name: "aboutHero",
  title: "About Hero",
  type: "object",
  fields: [
    {
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      initialValue: "Our Story"
    },
    {
      name: "heading",
      title: "Heading",
      type: "string"
    },
    {
      name: "highlightText",
      title: "Highlight Text",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },

    // Optional theming (future-proof)
    {
      name: "theme",
      type: "object",
      fields: [
        { name: "badgeBg", type: "string" },
        { name: "badgeText", type: "string" },
        { name: "heading", type: "string" },
        { name: "highlightGradient", type: "string" },
        { name: "description", type: "string" }
      ]
    }
  ]
};