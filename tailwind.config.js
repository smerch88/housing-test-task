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
      xl: '1200px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1199.98pxs' },
      notXl: { max: '1199.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '0',
        },
      },
      backgroundImage: {
        subscribe: "url('/images/subscribe/bg.png')",
      },
      colors: {
        dark: '#3C4563',
        primary: '#0E1735',
        secondary: '#888B97',
        border: '#E0E3EB',
        text_main: '#626687',
        headline: '#1B1C57',
        gray_light: '#F0F3FD',
        white: '#FFFFFF',
        accent: '#10B981',
        accent_heavy: '#047857',
        buttonBg: '#D1FAE5',
        btnLinkBg: 'rgba(255, 255, 255, 0.1)',
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
