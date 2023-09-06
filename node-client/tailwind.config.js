/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
}
