/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan all React files
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // ✅ Ensure DaisyUI is enabled
};
