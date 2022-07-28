const SAMPLE_0 = {
  name: 'SAMPLE_0',
  matrix: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  links: [],
}


const SAMPLE_1 = {
  name: 'SAMPLE_1',
  matrix: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 1, x: 1, w: 3, h: 1},
  ],
}

const SAMPLE_2 = {
  name: 'SAMPLE_2',
  matrix: [
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
  ],
  links: [
    // { type: 'col', y: 0, x: 3, l: 2},
    { type: 'col', y: 1, x: 3, l: 2},
    { type: 'col', y: 3, x: 1, l: 3},
  ],
}

const SAMPLE_3 = {
  name: 'SAMPLE_3',
  matrix: [
    [1, 1, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
  ],
  links: [
    { type: 'row', y: 1, x: 2, l: 2},
    { type: 'row', y: 2, x: 2, l: 2},
  ],
}

const SAMPLE_4= {
  name: 'SAMPLE_4',
  matrix: [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
  ],
  links: [
    // { type: 'row', y: 1, x: 0, l: 2},
    // { type: 'row', y: 2, x: 1, l: 2},
    { type: 'col', y: 0, x: 3, l: 6},
    { type: 'col', y: 1, x: 2, l: 3},
    { type: 'col', y: 2, x: 1, l: 4},
    
  ],
}

const SAMPLE_5 = {
  name: 'SAMPLE_5',
  matrix: [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
  ],
  links: [
    { type: 'cross', y: 1, x: 1, w: 2, h: 3 },
    { type: 'cross', y: 0, x: 4, w: 2, h: 2 },
    { type: 'cross', y: 2, x: 3, w: 2, h: 3 },
    // { type: 'row', y: 3, x: 1, l: 2 }
  ],
}

const generateTableFromMatrix = (name= '', matrix, indexed_cross) => {
  
  

  const tableEl = document.createElement('table');
  tableEl.classList.add('table-auto');

  const caption = document.createElement('caption');
  caption.innerHTML = `${name} [${matrix.length} - ${matrix[0].length}]`;
  tableEl.append(caption);



  const t = [];


  for (let y = 0; y < matrix.length; y++) {
    const row = matrix[y];
    const tr = document.createElement('tr');
    const ob = {
      tr,
    };
    for (let x = 0; x < row.length; x++) {
      const item = row[x];
      // console.log({x, y, item});
      const td = document.createElement('td');
     
      if (item === 1) {
        td.innerHTML = `[${x}, ${y}] - ${item}`;
        tr.append(td);
      } else {
  

        if (indexed_cross.has(`${y}_${x}`)){
          const obj = indexed_cross.get(`${y}_${x}`);
          if (x === obj.x && y === obj.y) {
            td.innerHTML = `[${x}, ${y}] <br/> cross ${obj.w} col <br/> ${obj.h} rows`;
            td.setAttribute('colspan', obj.w);
            td.setAttribute('rowspan', obj.h);
            tr.append(td);
            ob.length = obj.h;
          }
        }
      }
    }

    t.push(ob);
  }



  let tBodyList = [];
  let lastTBodyGroup = -1;
  let length = -1;
  let i = 0;

  const tableLog = [];
  t.forEach((o) => {
    const hasGroup = typeof o.length !== 'undefined';
    const isInGroup = hasGroup || (lastTBodyGroup !== -1 && i < length);
    const isFirst = hasGroup && lastTBodyGroup === -1;

    tableLog.push({ isInGroup, isFirst, l: o.length, i, lastTBodyGroup, length })

    if (isInGroup) {
      if (isFirst) {
        const tbody = document.createElement('tbody');
        lastTBodyGroup = tBodyList.length;
        length = o.length;
        i = 0;
        tBodyList.push(tbody);
      } 

      if (!isFirst && hasGroup) {
        length += (o.length - 1);
      }
      tBodyList[lastTBodyGroup].append(o.tr);

      if (i === length - 1) {
        lastTBodyGroup = -1;
        length = -1;
      }

    } else {
      const tbody = document.createElement('tbody');
      tbody.append(o.tr);
      tBodyList.push(tbody);
      lastTBodyGroup = -1;
      length = -1;
    }


     i++;
  })

  console.table(tableLog);

  tBodyList.forEach((tbody) => {
    tableEl.append(tbody);
  })

  const containerEl = document.createElement('div');
  containerEl.classList.add('root-editable-table');
  containerEl.append(tableEl)

  document.querySelector('.app').append(containerEl);
}



document.querySelector('.app').innerHTML = '';

const generateTable = ({ name, matrix, links }) => {

  const indexed_cross = new Map();
  links.filter(({ type }) => type === 'cross' ).forEach(({ x, y, w, h }) => {
    indexed_cross.set(`${y}_${x}`, { x, y, w, h });
  });
  
  generateTableFromMatrix(name, matrix, indexed_cross);
}


const toGenerate = [
  SAMPLE_0,
  SAMPLE_1,
  SAMPLE_2,
  SAMPLE_3,
  SAMPLE_4,
  SAMPLE_5, // not finished
];

toGenerate.forEach(generateTable);


if (module.hot) {
  module.hot.accept()
}