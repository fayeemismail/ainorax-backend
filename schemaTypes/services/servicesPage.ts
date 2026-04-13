// schemaTypes/services/servicesPage.ts
export default {
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "servicesHero" },
        { type: "mainServices" },
        { type: "additionalCapabilities" },
        { type: "servicesComingSoon" },
        { type: "servicesCTA" }
      ]
    }
  ]
};