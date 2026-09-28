<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  <div>sortable CLI table for ink</div>
  <a href="https://npmjs.org/package/ink-table-flip">
    <img src="https://img.shields.io/npm/v/ink-table-flip.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/ink-table-flip/builds/index.js">
     <img src="https://badge-size.herokuapp.com/spencermountain/ink-table-flip/master/builds/index.js" />
  </a>
</div>

<div align="center">
  <code>npm install ink-table-flip</code>
</div>


<!-- spacer -->
<img height="50px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

<img width="1800" height="600" alt="Image" src="https://github.com/user-attachments/assets/8930e18e-46ed-46b9-afda-7a62ffbd49e3" />
columns can be sorted, and they are sorted properly by type

```js
import Table from 'ink-table-flip'

const cols = [
  { label: 'Name', id: 'name', sortable: true, color: 'blue' },
  { label: 'Start Date', id: 'start', format: 'month-year', sortable: true },
  { label: '# Terms', id: 'terms', type: 'number', maxWidth: 10 },
  { label: 'Age', id: 'age', maxWidth: 10 },
  { label: 'Gender', id: 'gender', maxWidth: 12 },
  { label: 'Birthplace', id: 'birthplace' }
]

const rows = [
  {"name": "Olivia Chow", "start": "2023-07-12", "terms": 1,"gender": "f", "age": 66, "birthplace": "Hong Kong"},
  {"name": "John Tory", "start": "2014-12-01", "terms": 3, "gender": "m", "age": 60, "birthplace": "Toronto"},
  {"name": "Rob Ford", "start": "2010-12-01", "terms": 1, "gender": "m", "age": 41, "birthplace": "Toronto"},
  {"name": "David Miller", "start": "2003-12-01", "terms": 2, "gender": "m", "age": 45, "birthplace": "Toronto"},
  {"name": "Mel Lastman", "start": "1998-01-01", "terms": 2, "gender": "m", "age": 65, "birthplace": "Toronto"},
  {"name": "Barbara Hall", "start": "1994-12-01", "terms": 1, "gender": "f", "age": 45, "birthplace": null},
]
return (
  <Table cols={cols} rows={rows} />
)
```

### Usage
The `Table` component accepts two properties: 
* `cols` is the column configuration.
* `rows` is the raw data

Within the cols objects, you can decide how the data shows up, and what it looks like.

```js
import Table from 'ink-table-flip'
import rows from './simpsons-episodes.js'
const cols = [
  {
    label: 'Episode',// column header title
    id: 'episode',   // the attribute in your data
    sortable: true,  // can it be clicked on
    color: 'magenta',// the color of the text
    maxWidth: 11     // wont grow beyond this # of characters
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



## Column properties

* `label`: The column header label.
* `id`: The unique identifier for the column.
* `sortable`: Whether the column is sortable.
* `sorted`: Whether the column is initially sorted (only one)
* `type`: The data type of the column (used for sorting)
* `color`: The color of the column header.
* `maxWidth`: The maximum width of the column.
* `minWidth`: The minimum width of the column.
* `flexBasis`: The growth behaviour for the width column.
* `fmt`: The formatting function for the column.
  * `number` - adds commas to large numbers
  * `percentage` - adds a percentage sign to the value
  * `float` - converts to 1-decimal place
  * `text` - (default)
  * `titlecase` - converts to title case
  * `lowercase` - converts to lowercase
  * `iso` - '2023-07-03'
  * `month-year` - 'Jul 2023'
  * `nice-date` - 'Jul 3rd 2023'
* `prefix` - A prefix to add to the values.
* `suffix` - A suffix to add to the values.


## TypeScript

Type declarations are included for the ESM component.
`Column<Row>` checks column IDs against your row properties; array rows use
numeric column IDs. `TableProps`, `ColumnId`, and `Format` are also exported types.

```tsx
import Table, { type Column } from 'ink-table-flip'

interface Episode {
  title: string
  episode: number
}

const cols: Column<Episode>[] = [
  { id: 'title', label: 'Title' },
  { id: 'episode', label: 'Episode', format: 'number' }
]
const rows: Episode[] = [{ title: 'Kamp Krusty', episode: 1 }]

const table = <Table rows={rows} cols={cols} />
```

### See also
* [maticzav/ink-table](https://github.com/maticzav/ink-table)
* [cli-table3](https://github.com/cli-table/cli-table3) - static CLI tables

MIT
