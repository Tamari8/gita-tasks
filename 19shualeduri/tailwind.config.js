/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff7d1a',
          600: '#e66b10',
          100: '#ffede0',
        },
        navy: {
          900: '#1d2025',
          800: '#2b2f38',
        },
        slate: {
          500: '#68707d',
          300: '#b6bcc8',
          100: '#f7f8fd',
        }
      },
      fontFamily: {
        sans: ['"Kumbh Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
