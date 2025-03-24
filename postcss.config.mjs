const config = {
  plugins: ["@tailwindcss/postcss"], // Make sure it matches your project structure
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the `app` directory
    "./Components/**/*.{js,ts,jsx,tsx}", // Include components folder
  ],
};

export default config;
