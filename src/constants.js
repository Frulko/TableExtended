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
    // { type: 'col', y: 1, x: 3, l: 2},
    // { type: 'col', y: 3, x: 1, l: 3},

    { type: 'cross', y: 1, x: 3, w: 1, h: 2},
    { type: 'cross', y: 3, x: 1, w: 1, h: 3},
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
    // { type: 'row', y: 1, x: 2, l: 2},
    // { type: 'row', y: 2, x: 2, l: 2},

    { type: 'cross', y: 1, x: 2, w: 2, h: 1 },
    { type: 'cross', y: 2, x: 2, w: 2, h: 1 },
  ],
}

const SAMPLE_3_1 = {
  name: 'SAMPLE_3_1',
  matrix: [
    [1, 1, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 1, x: 2, w: 2, h: 2 },
  ],
}

const SAMPLE_3_2 = {
  name: 'SAMPLE_3_2',
  matrix: [
    [1, 1, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 1, x: 2, w: 1, h: 2 },
    { type: 'cross', y: 1, x: 3, w: 1, h: 2 },
  ],
}

const SAMPLE_4= {
  name: 'SAMPLE_4',
  matrix: [
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 1],
  ],
  links: [
    // { type: 'row', y: 1, x: 0, l: 2},
    // { type: 'row', y: 2, x: 1, l: 2},

    // { type: 'col', y: 0, x: 3, l: 6},
    // { type: 'col', y: 1, x: 2, l: 3},
    // { type: 'col', y: 2, x: 1, l: 4},
    
    { type: 'cross', y: 1, x: 3, w: 1, h: 6 },
    { type: 'cross', y: 2, x: 2, w: 1, h: 3 },
    { type: 'cross', y: 3, x: 1, w: 1, h: 2 },
    { type: 'cross', y: 5, x: 1, w: 1, h: 2 },
  ],
}

const SAMPLE_5 = {
  name: 'SAMPLE_5',
  matrix: [
    [1, 1, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 0, x: 3, w: 2, h: 2 },
    { type: 'cross', y: 1, x: 1, w: 1, h: 3 },
    { type: 'cross', y: 2, x: 3, w: 2, h: 3 },
    // { type: 'row', y: 3, x: 1, l: 2 }
  ],
}

const SAMPLE_5_2 = {
  name: 'SAMPLE_5_2',
  matrix: [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 0, x: 3, w: 2, h: 2 },
    { type: 'cross', y: 1, x: 1, w: 2, h: 3 },
    { type: 'cross', y: 2, x: 3, w: 2, h: 3 },
    // { type: 'row', y: 3, x: 1, l: 2 }
  ],
}

const SAMPLE_5_3 = {
  name: 'SAMPLE_5_3',
  matrix: [
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 0, x: 1, w: 2, h: 3 },
    { type: 'cross', y: 1, x: 3, w: 2, h: 2 },
    { type: 'cross', y: 3, x: 3, w: 2, h: 2 },
    // { type: 'row', y: 3, x: 1, l: 2 }
  ],
}


const SAMPLE_5_4 = {
  name: 'SAMPLE_5_4',
  matrix: [
    [0, 0, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 0, x: 0, w: 3, h: 1 },
    // { type: 'cross', y: 1, x: 1, w: 2, h: 3 },
    { type: 'cross', y: 2, x: 3, w: 2, h: 2 },
    { type: 'cross', y: 4, x: 3, w: 2, h: 2 },
    { type: 'cross', y: 1, x: 1, w: 1, h: 3 },
    { type: 'cross', y: 1, x: 2, w: 1, h: 3 },
    // { type: 'row', y: 3, x: 1, l: 2 }
  ],
}


const E_SAMPLE_1_0 = {
  name: 'E_SAMPLE_1_0',
  matrix: [
    [0, 0, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  links: [
    { type: 'cross', y: 0, x: 0, w: 3, h: 1 },
    // { type: 'cross', y: 1, x: 1, w: 2, h: 3 },
    { type: 'cross', y: 2, x: 3, w: 2, h: 2 },
    { type: 'cross', y: 4, x: 3, w: 2, h: 2 },
    { type: 'cross', y: 1, x: 1, w: 1, h: 3 },
    { type: 'cross', y: 1, x: 2, w: 1, h: 2 },
    // { type: 'row', y: 3, x: 1, l: 2 }
  ],
}

export const SAMPLES = [
  SAMPLE_0,
  SAMPLE_1,
  SAMPLE_2,
  SAMPLE_3,
  SAMPLE_3_1,
  SAMPLE_3_2,
  SAMPLE_4,
  SAMPLE_5, // not finished
  SAMPLE_5_2, // not finished
  SAMPLE_5_3,
  SAMPLE_5_4
];

export const ERROR_SAMPLES = [
  E_SAMPLE_1_0
];