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
        'hub-border': '#E5E5E5',
        'hub-title': '#111111',
        'hub-subtitle': '#6B7280',
        'hub-background-nav': '#F5F5F5',
        'hub-inactive': '#9CA3AF',
        'hub-text': '#FFFFFF',
        icons: '#6B7280',
        'hub-background-dark': '#09090B',
        'hub-border-dark': '#27272A',
        'hub-title-dark': '#FAFAFA',
        'hub-subtitle-dark': '#A1A1AA',
        'hub-background-nav-dark': '#18181B',
        'hub-surface-dark': '#18181B',
        'hub-surface-hover-dark': '#27272A',
        'hub-inactive-dark': '#71717A',
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(to right, #825BDD, #5327BA)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
