module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  purge: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
  screens:{
    'sm': {'max': '639px'},
    "md":{'max': '768'},
    'lg':'976px',
    'xl':"1440px"
  },
    extend: {
      backgroundImage: {
        'building': "url('./building-1960.jpg')",
      }
    },
  },
  plugins: [],
}
