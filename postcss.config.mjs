const config = {
  plugins: ["@tailwindcss/postcss"],
  content:  [
    "./app/**/*.{js,jsx,ts,tsx,mdx}", // ✅ Include the app folder
    "./components/**/*.{js,jsx,ts,tsx,mdx}", // ✅ Include components folder
    "./pages/**/*.{js,jsx,ts,tsx,mdx}", // ✅ Include pages (if applicable)
  ], // Make sure it matches your project structure
  theme: {
    extend: {},
  },
};

export default config;
