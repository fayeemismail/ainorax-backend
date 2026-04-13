export default {
  name: "loader",
  title: "Global Loader",
  type: "document",
  fields: [
    // 📝 Branding
    {
      name: "brand",
      title: "Brand Text",
      type: "object",
      fields: [
        { name: "main", type: "string" },      // Ainor
        { name: "highlight", type: "string" }  // ax
      ]
    },

    {
      name: "loadingText",
      type: "string",
      initialValue: "Loading..."
    },

    {
      name: "footerText",
      type: "string",
      initialValue: "AINORAX"
    },

    

    // 🎨 Theme
    {
      name: "theme",
      title: "Loader Theme",
      type: "object",
      fields: [
        // Background
        { name: "background", type: "string" }, // #15233e

        // Logo box
        { name: "logoGradient", type: "string" }, // from-blue-500 to-purple-600
        { name: "logoTextColor", type: "string" },
        { name: "logoHighlightColor", type: "string" },

        // Glow ring
        { name: "ringColor", type: "string" },

        // Loader row
        { name: "iconColor", type: "string" },
        { name: "loadingTextColor", type: "string" },

        // Progress bar
        { name: "progressGradient", type: "string" },
        { name: "progressBg", type: "string" },

        // Footer
        { name: "footerColor", type: "string" }
      ]
    }
  ]
};