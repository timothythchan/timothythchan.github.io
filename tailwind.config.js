/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        body: '14px',
      },
      colors: {
        'hub-background': '#FFFFFF',
        'hub-border': '#EDEDED',
        'hub-title': '#121020',
        'hub-subtitle': '#888888',
        'hub-background-nav': '#FAFAFA',
        'hub-inactive': '#B0B0B0',
        'hub-text': '#FFFFFF',
        icons: '#6E6E6E',
        'hub-background-dark': '#101419',
        'hub-border-dark': '#052B2E',
        'hub-title-dark': '#FFFFFF',
        'hub-subtitle-dark': '#999999',
        'hub-background-nav-dark': '#080C11',
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(to right, #825BDD, #5327BA)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
