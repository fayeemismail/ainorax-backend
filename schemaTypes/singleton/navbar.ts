//schemaTypes/singleton/navbar.ts
export default {
    name: "navbar",
    title: "Navbar",
    type: "document",
    fields: [
        // 🧩 Logo
        {
            name: "logo",
            title: "Logo",
            type: "object",
            fields: [
                { name: "image", type: "image", title: "Logo Image" },
                { name: "textPrimary", type: "string", title: "Primary Text" },
                { name: "textSecondary", type: "string", title: "Secondary Text" },
                { name: "link", type: "string", title: "Logo Link" }
            ]
        },

        // 🔗 Navigation Items
        {
            name: "navItems",
            title: "Navigation Items",
            type: "array",
            of: [{ type: "navItem" }]
        },

        // 🎨 Styling (IMPORTANT)
        {
            name: "variant",
            title: "Navbar Variant",
            type: "string",
            options: {
                list: [
                    { title: "Transparent", value: "transparent" },
                    { title: "Solid", value: "solid" },
                    { title: "Glass", value: "glass" }
                ]
            }
        },

        // 🔥 Theme Mapping (NO raw colors)
        {
            name: "theme",
            title: "Theme Mapping",
            type: "object",
            fields: [
                { name: "background", type: "string" },
                { name: "backgroundScrolled", type: "string" },
                { name: "mobileBackground", type: "string" },

                { name: "text", type: "string" },
                { name: "textSecondary", type: "string" },
                { name: "textHover", type: "string" },
                { name: "textActive", type: "string" },

                { name: "accent", type: "string" },

                { name: "border", type: "string" },

                { name: "gradient", type: "string" },

                { name: "hoverUnderline", type: "string" }
            ]
        }
    ]
};