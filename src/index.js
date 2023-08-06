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


/**
 * from data config generate html table
 * add interaction 
 *  - selection
 *  - dnd reorder
 *  - rich text editor
 * save data in form
 * add test file for generate matrix + false matrix
 * add a sample editor (only one)
 * add interaction
 * add documentation on how it working
 * add extension system like tinymce for add new capabilities in richtext edition (like emoji, pricing, etc... customization)
 * add drag n drop resize (percentatge ?) column width ? height ?
 */


SAMPLES.forEach(generateTable);
console.log('SAMPLES', SAMPLES.length)


if (module.hot) {
  module.hot.accept()
}