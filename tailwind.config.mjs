/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50',
          light: '#34495E'
        },
        secondary: {
          DEFAULT: '#C0392B',
          light: '#E74C3C'
        },
        neutral: {
          light: '#ECF0F1',
          dark: '#2C3E50'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Raleway', 'sans-serif']
      }
    }
  },
  plugins: []
}