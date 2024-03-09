import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryVeryDarkBlue: "hsl(233, 47%, 7%)",
        PrimaryDarkDesaturatedBlue: "hsl(244, 38%, 16%)",
        PrimarySoftViolet: "hsl(277, 64%, 61%)",
        NeutralWhite: "hsl(0, 0%, 100%)",
        NeutralTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        NeutralTransparentWhite60: "hsla(0, 0%, 100%, 0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
