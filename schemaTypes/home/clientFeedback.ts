// schemaTypes/home/clientFeedback.ts

export default {
  name: "clientFeedback",
  title: "Client Feedback",
  type: "document",
  fields: [
    {
      name: "feedbackContent",
      title: "Feedback Content",
      type: "text",
      rows: 4,
      description: "The testimonial or feedback provided by the client.",
      validation: (Rule: any) => Rule.required().min(5).error("Feedback content is required"),
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      description: "The name of the company that provided the feedback.",
      validation: (Rule: any) => Rule.required().error("Company name is required"),
    },
    {
      name: "companyUrl",
      title: "Company Website URL",
      type: "url",
      description: "Optional URL. If provided, the company name becomes a clickable link.",
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    },
    {
      name: "personImage",
      title: "Person Image (Optional)",
      type: "image",
      options: { hotspot: true },
      description: "Photo of the person who gave the feedback. Optional — only shown if uploaded.",
    },
    {
      name: "personName",
      title: "Person Name (Optional)",
      type: "string",
      description: "Name of the person who provided the feedback.",
    },
    {
      name: "personRole",
      title: "Person Role / Title (Optional)",
      type: "string",
      description: "E.g. Founder, CEO, Director. Optional.",
    },
    {
      name: "companyLogo",
      title: "Company Logo (Optional)",
      type: "image",
      options: { hotspot: true },
      description: "Company logo image. Optional — if not provided, the word/initials logo will be displayed.",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Optional sort order (e.g., 1, 2, 3). Lower numbers appear first.",
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "companyName",
      subtitle: "feedbackContent",
      media: "personImage",
      order: "order",
    },
    prepare({ title, subtitle, media, order }: any) {
      const orderLabel = order !== undefined && order !== null ? `#${order} · ` : "";
      return {
        title: title || "Untitled Company",
        subtitle: `${orderLabel}${subtitle ? subtitle.slice(0, 80) : ""}`,
        media,
      };
    },
  },
};
