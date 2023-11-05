import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
      },
    },
    extend: {
      colors: {
        black: "rgb(33, 36, 43)",
        "black-alpha": "rgba(33, 36, 43, 0.125)",
        white: "rgb(255, 255, 255)",
        "white-alpha": "rgba(255, 255, 255,0.125)",
        red: "rgb(217, 17, 74)",
        "red-alpha": "rgba(217, 17, 74,0.125)",
        blue: "rgb(0, 145, 181)",
        "blue-alpha": "rgba(0, 145, 181,0.125)",
        gray: "rgb(226, 224, 223)",
        "gray-alpha": "rgba(226, 224, 223,0.125)",
        purple: "rgb(92, 33, 241)",
        "purple-alpha": "rgba(92, 33, 241,0.125)",
      },
    },
  },
  plugins: [],
};
export default config;
