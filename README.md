<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  <div>compression of key-value data</div>
  <a href="https://npmjs.org/package/ink-table-flip">
    <img src="https://img.shields.io/npm/v/ink-table-flip.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/ink-table-flip/builds/ink-table-flip.min.js">
     <img src="https://badge-size.herokuapp.com/spencermountain/ink-table-flip/master/builds/ink-table-flip.min.js" />
  </a>
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square" />
  </a>
</div>

<div align="center">
  <code>npm install ink-table-flip</code>
</div>


<!-- spacer -->
<img height="50px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>


```js
import Table from 'table-flip'
import rows from './simpsons-episodes.js'
const cols = [
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
  // ...
]

  return (
    <Table cols={cols} rows={rows} />
  )
```

<img width="2556" height="924" alt="Image" src="https://github.com/user-attachments/assets/84e30d2d-609a-4dc3-8cd5-5361e8fde6b8" />


MIT
