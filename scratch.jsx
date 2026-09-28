// node --import tsx playground/components/Table/scratch.jsx
import React from 'react'
import { useApp, useInput, render } from 'ink'
import Table from './src/Index.jsx'
import { simpsons } from './tests/data/_cols.js'

// const cols = simpsons
// import rows from './tests/data/simpsons_S4.json' with { type: 'json' }


const cols=[
  { label: 'Name', id: 'name', sortable: true, color: 'blue', minWidth: 12 },
  { label: 'Start Date', id: 'start', format: 'month-year', sortable: true, minWidth: 10 },
  { label: 'Terms', id: 'terms', type: 'number' },
  { label: 'Age', id: 'age' },
  { label: 'Gender', id: 'gender' },
  { label: 'Birthplace', id: 'birthplace', minWidth: 6 }
]

const rows=[
  {"name":"Olivia Chow","start":"2023-07-12","terms":1,"end":null,"gender":"Female","age":66,"birthplace":"Hong Kong"},
  {"name":"John Tory","start":"2014-12-01","terms":3,"end":"2023-02-17","gender":"Male","age":60,"birthplace":"Toronto"},
  {"name":"Rob Ford","start":"2010-12-01","terms":1,"end":"2014-11-30","gender":"Male","age":41,"birthplace":"Toronto"},
  {"name":"David Miller","start":"2003-12-01","terms":2,"end":"2010-11-30","gender":"Male","age":45,"birthplace":"Toronto"},
  {"name":"Mel Lastman","start":"1998-01-01","terms":2,"end":"2003-11-30","gender":"Male","age":65,"birthplace":"Toronto"},
  {"name":"Barbara Hall","start":"1994-12-01","terms":1,"end":"1997-12-31","gender":"Female","age":45,"birthplace":"Ottawa"},
  {"name":"June Rowlands","start":"1991-12-01","terms":1,"end":"1994-11-30","gender":"Female","age":67,"birthplace":"Montreal"},
  {"name":"Art Eggleton","start":"1980-12-01","terms":4,"end":"1991-11-30","gender":"Male","age":37,"birthplace":"Stratford"},

]

function Scratch() {
  const { exit } = useApp()
  useInput((input, key) => {
    if (key.escape) exit()
  })

  return (
    <Table
      cols={cols} rows={rows}
    />
  )
}

const app = render(<Scratch />, {})
try {
  await app.waitUntilExit()
} finally {
  app.unmount()
  app.cleanup()
}
