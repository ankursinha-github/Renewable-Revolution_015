/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This line includes all JS, JSX, TS, and TSX files in the src folder
    "./public/index.html",         // Optional: Add this if you have classes in your index.html
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: "#14b8a6",
        },
        gray: {
          100: "#f3f4f6",
          300: "#d1d5db",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      borderRadius: {
        "10": "10px",
      },
    },
  },
  plugins: [],
};
