// schemaTypes/home/feedbackSection.ts

export default {
  name: "feedbackSection",
  title: "Feedback Section",
  type: "object",
  fields: [
    {
      name: "badge",
      title: "Badge Text (Optional)",
      type: "string",
      initialValue: "Testimonials",
    },
    {
      name: "title",
      title: "Section Heading",
      type: "string",
      initialValue: "Client Feedback",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Section Subtitle / Description",
      type: "text",
      rows: 3,
    },
  ],
};
