import React from 'react'
import { Box } from 'ink'
import Cell from '../Cell.jsx'
import HeadingCell from './HeadingCell.jsx'
import { isSortable } from '../_lib/columns.js'

export default function Heading({ cols, sort, onSort, headers, focusPrefix }) {
  const firstSortable = cols.findIndex(isSortable)

  return (
    <Box
      flexShrink={0}
      borderStyle="single"
      borderTop={false}
      borderLeft={false}
      borderRight={false}
      borderBottomColor="gray"
      borderBottomDimColor
    >
      {cols.map((col, index) => (
        <Cell key={col.id} col={col} last={index === cols.length - 1}>
          <HeadingCell
            col={col}
            sort={sort}
            onSort={onSort}
            focusId={`${focusPrefix}-${col.id}`}
            first={index === firstSortable}
            register={(node) => {
              // Mouse hit testing only needs the current sortable header nodes.
              if (node && isSortable(col)) headers.current.set(col.id, node)
              else headers.current.delete(col.id)
            }}
          />
        </Cell>
      ))}
    </Box>
  )
}
