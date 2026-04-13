// schemaTypes/contact/contactPage.ts
export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "contactHero" },
        { type: "contactMain" },
        { type: "contactLocation" },
        { type: "contactCTA" }
      ]
    }
  ]
};