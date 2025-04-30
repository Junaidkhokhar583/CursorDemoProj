/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/pagedone/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        pop: 'pop 1s ease-out forwards',
      },

      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      dropShadow:{
        "glow":"-4px 2px 7px rgb(55 197 184 / 0.8)",
      },

      boxShadow:{
        'divider': "0 1px 11px 2px rgb(0 0 0 / 0.3)"
      },
      screens:{
        exsm:'100px',
        xsm:'320px',
        exmd:'430px',
        xmd:'572px'
      },
      colors: {
        'regal-blue': '#243c5a',
        'navy': '#003060'
      },
    }
  },
  plugins: [
   require('daisyui'),
   require('tailwindcss-animated')
  ],
  daisyui: {
    themes: [],
  },
};
