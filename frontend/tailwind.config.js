/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e7f5ff',
          500: '#4c6ef5',
          900: '#1c274c',
        },
      },
      borderRadius: {
        bubble: '1.25rem',
      },
    },
  },
  plugins: [],
};
