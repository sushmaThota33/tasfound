const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "@tailwindcss/postcss": {},
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in the `app` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include components folder
  ],
};

export default config;
