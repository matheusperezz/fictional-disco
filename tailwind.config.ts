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
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "black-arbo": "url('https://c0.wallpaperflare.com/path/590/806/363/4k-wallpaper-animal-black-and-white-hd-wallpaper-57c7f2a47f36f28125e84089e57a1c7b.jpg')"
      },
      fontFamily: {
        'jet': ['Jetbrains Mono']
      }
    },
  },
  plugins: [],
};
export default config;
