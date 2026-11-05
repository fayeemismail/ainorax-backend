// schemaTypes/shared/clientCard.ts

export default {
  name: "clientCard",
  title: "Client Card",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "tag",
      title: "Tag (Optional)",
      type: "string",
    },
    {
      name: "url",
      title: "Client Website URL (Optional)",
      type: "url",
      description: "Optional website or case study URL. If provided, clicking the card will open this link in a new tab.",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    },
  ],
};
