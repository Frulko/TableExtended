const { SAMPLES } = require("./constants");
const { generateTableFromMatrix } = require("./table");





document.querySelector('.app').innerHTML = '';

const generateTable = ({ name, matrix, links }) => {

  const indexed_cross = new Map();
  links.filter(({ type }) => type === 'cross' ).forEach(({ x, y, w, h }) => {
    indexed_cross.set(`${y}_${x}`, { x, y, w, h });
  });
  
  // console.log(name, '-->', indexed_cross)
  generateTableFromMatrix(name, matrix, indexed_cross);
}




SAMPLES.forEach(generateTable);


if (module.hot) {
  module.hot.accept()
}