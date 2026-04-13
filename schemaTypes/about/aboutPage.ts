export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "aboutHero" },
        { type: "aboutStory" },
        { type: "aboutValues" },
        { type: "aboutProcess" },
        { type: "aboutStats" },
        { type: "aboutClosing" }
      ]
    }
  ]
};