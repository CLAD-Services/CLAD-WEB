/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0F1A2C', light: '#1a2942', dark: '#0a1120' },
        gold: { DEFAULT: '#C5A880', light: '#d4bc99', dark: '#b08f5f' },
        'soft-gray': '#F8F9FA',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};