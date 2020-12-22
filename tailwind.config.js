module.exports = {
  purge: [`./src/**/*.js`],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/typography`),
    // ...
  ],
};
