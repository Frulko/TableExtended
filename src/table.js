
export const generateTableFromMatrix = (name= '', matrix, indexed_cross) => {
  
  const focusEl = document.createElement('div');
  focusEl.classList.add('focus');
  focusEl.setAttribute('contentEditable', true)


  const tableEl = document.createElement('table');
  tableEl.classList.add('table-auto');
  tableEl.setAttribute('id', name.toLowerCase());

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

    let lineLocked = false;

    for (let x = 0; x < row.length; x++) {
      const item = row[x];
      // console.log({x, y, item});
      const td = document.createElement('td');
      
      // console.log('--item', `[${x}, ${y}] - ${item}`)

      if (item === 1) {
        td.innerHTML = `<span class="origin">(${y},${x})</span>`; // set text
        tr.append(td);

        if (!lineLocked) {
          ob.length = 1;
          ob.y = y;
        }

      } else {
        if (indexed_cross.has(`${y}_${x}`)){
          lineLocked = true;
          const obj = indexed_cross.get(`${y}_${x}`);
          if (x === obj.x && y === obj.y) {
            td.innerHTML = `<span class="origin">(${y},${x})</span> ${obj.h} x ${obj.w}`; // set text
            td.setAttribute('colspan', obj.w);
            td.setAttribute('rowspan', obj.h);
            tr.append(td);
            ob.length = obj.h;
            ob.y = y;
          }
        }
      }

      td.addEventListener('click', (e) => {
        const tdRect = td.getBoundingClientRect();
        focusEl.style.opacity = 1;
        focusEl.style.top = `${tdRect.top + window.scrollY}px`;
        focusEl.style.left = `${tdRect.left + window.scrollX}px`;
        focusEl.style.width = `${tdRect.width}px`;
        focusEl.style.height = `${tdRect.height}px`;
        focusEl.innerHTML = td.innerHTML;
      })
    }

    lineLocked = false;

    t.push(ob);
  }





  let endGroup = -1;
  // let openedTbody = false;
  let tbodyEl = null;


  t.forEach((o, idx) => {
    const hasGroup = typeof o.length !== 'undefined';



    // if (idx !== 0 && idx >= endGroup) {
    //   console.log('-stop', idx)
    //   openedTbody = false;
    // }


    if (idx < endGroup && o.length > 1 && o.length + idx > endGroup) { // if tr is also a group check if is inner bigger one or smaller (if bigger expand the endGroup to the new)
      endGroup = o.length + idx;
    }


    if (idx >= endGroup) { // create a new tbody group
      endGroup = o.length + idx;
      // openedTbody = true;

      // console.log('new group', idx, o.length, endGroup);
      tbodyEl = document.createElement('tbody');
      tableEl.append(tbodyEl);
    }


    // console.log('-id', idx, endGroup)

    tbodyEl.appendChild(o.tr);
    

    // if (idx === t.length -1 && openedTbody) {
    //   console.log('-stop', idx)
    // }
   
  })


  const containerEl = document.createElement('div');
  containerEl.classList.add('root-editable-table');
  containerEl.append(tableEl)

  containerEl.append(focusEl);

  document.querySelector('.app').append(containerEl);
}