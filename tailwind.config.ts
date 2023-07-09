import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem',  // ~10px
      }
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
