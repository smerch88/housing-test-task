/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {},
      colors: {
        dark: '#3C4563',
        primary: '#0E1735',
        secondary: '#888B97',
        text_main: '#626687',
        headline: '#1B1C57',
        white: '#F0F3FD',
        gray_light: '#FFFFFF',
        accent: '#10B981',
        btnLinkBg: 'rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      boxShadow: {},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
};
