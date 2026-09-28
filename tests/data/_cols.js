// "episode": 1,
// "title": "Kamp Krusty",
// "directedBy": "Mark Kirkland",
// "writtenBy": "David M. Stern",
// "airDate": "1992-09-24",
// "prodCode": "8F24",
// "viewers": 21.8

export const simpsons = [
  {
    label: 'Episode',
    id: 'episode',
    sortable: true,
    sorted: true,
    type: 'number',
    color: 'magenta',
    maxWidth: 11
  },
  {
    label: 'Title',
    id: 'title',
    sortable: true
  },
  {
    label: 'Directed By',
    id: 'directedBy',
    sortable: true,
    maxWidth: 30
  },
  {
    label: 'Written By',
    id: 'writtenBy',
    sortable: true
  },
  {
    label: 'Viewers',
    id: 'viewers',
    sortable: true,
    type: 'number',
    format: 'float',
    maxWidth: 12
  },
  {
    label: 'Air Date',
    id: 'airDate',
    sortable: true,
    maxWidth: 18,
    type: 'date',
    color: 'cyan',
    format: 'nice-date'
  }
]


export const cities = [
  {
    label: 'Name',
    id: 0,
    sortable: true,
    sorted: true
  },
  {
    label: 'Country',
    id: 1,
    sortable: true
  },
  {
    label: 'Latitude',
    id: 2,
    sortable: true
  },
  {
    label: 'Longitude',
    id: 3,
    sortable: true
  }
]

// "Species": "Adelie",
// "Island": "Torgersen",
// "Beak Length (mm)": 39.1,
// "Beak Depth (mm)": 18.7,
// "Flipper Length (mm)": 181,
// "Body Mass (g)": 3750,
// "Sex": "MALE"
export const penguins = [
  {
    label: 'Species',
    id: 'Species',
    sortable: true
  },
  {
    label: 'Island',
    id: 'Island',
    sortable: true
  },
  {
    label: 'Beak Length (mm)',
    id: 'Beak Length (mm)',
    sortable: true,
    type: 'number'
  },
  {
    label: 'Beak Depth (mm)',
    id: 'Beak Depth (mm)',
    sortable: true,
    type: 'number'
  },
  {
    label: 'Flipper Length (mm)',
    id: 'Flipper Length (mm)',
    sortable: true,
    type: 'number'
  },
  {
    label: 'Body Mass (g)',
    id: 'Body Mass (g)',
    sortable: true,
    type: 'number'
  },
  {
    label: 'Sex',
    id: 'Sex',
    sortable: true
  }
]
