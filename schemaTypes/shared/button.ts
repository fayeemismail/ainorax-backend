export default {
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    { name: "text", type: "string" },
    { name: "link", type: "string" },

    {
      name: "variant",
      type: "string",
      options: {
        list: ["primary", "secondary", "outline"]
      }
    }
  ]
};