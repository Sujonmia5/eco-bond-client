import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        quaternary: "var(--quaternary)",
        light: "var(--light)",
      },
      backgroundImage: {
        "page-image":
          "url('https://res.cloudinary.com/dwvt17wew/image/upload/v1738059554/slide-1_j7hauc.jpg')",
        breadcrumb:
          "url('https://res.cloudinary.com/dwvt17wew/image/upload/v1738170573/bg-6_owngoe.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
