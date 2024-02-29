import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors: {
        "my_Cyan": "hsl(180, 66%, 49%)",
        "my_DarkViolet": "hsl(257, 27%, 26%)",
        "my_Red": "hsl(0, 87%, 67%)",
        "my_Gray": "hsl(0, 0%, 75%)",
        "my_GrayishViolet": "hsl(257, 7%, 63%)",
        "my_VeryDarkBlue": "hsl(255, 11%, 22%)",
        "my_VeryDarkViolet": "hsl(260, 8%, 14%)",
      }
    },
  },
  plugins: [],
};
export default config;
