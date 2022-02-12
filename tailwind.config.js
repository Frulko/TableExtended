module.exports = {
  mode: 'jit',
  content: [
    './src/*.html',
  ],
  theme: {
    extend: {
      // screens: {
      //   'sm': '100px',
      // },
      colors: {
        violet: '#916DD5',
        black: '#29282D',
        white: '#FDFFFC',
      },
      fontFamily: {
        'miriam': ['Miriam Libre'],
        'raleway': ['Raleway'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('./src/utils/grid')({
      columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      gutter: 20,
      variants: ['responsive'],
    })
  ],
}