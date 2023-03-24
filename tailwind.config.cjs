/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      shamrock: {
        50: '#edfcf3',
        100: '#d4f7e1',
        200: '#aceec8',
        300: '#76dfa9',
        400: '#38c682',
      },
      pine: {
        50: '#00dcba',
        100: '#00b29b',
        200: '#008d7c',
        300: '#00796d',
        400: '#065b52',
      },
      gray: {
        50: '#F3F3F3',
        100: '#CECFD2',
        200: '#B6B8BC',
        300: '#9EA0A5',
        400: '#86888F',
        500: '#6D7079',
        600: '#555962',
        700: '#3D414C',
        800: '#181D2A',
        900: '#000000',
      },
    },
  },
  plugins: [],
};
