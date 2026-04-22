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
  ],
};