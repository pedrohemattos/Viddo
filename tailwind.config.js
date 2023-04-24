/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '32rem': '32rem',
        '37rem': '37rem',
        '46rem': '46rem'
      }
    },
  },
  plugins: [],
}

