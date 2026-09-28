import React from 'react'
import { Box, Text, useFocus, useInput, useStdin } from 'ink'
import Cell from '../Cell.jsx'
import { isSortable, singleLine } from '../_lib/columns.js'

function HeadingCell({ col, sort, onSort, register, focusId, first }) {
  const sortable = isSortable(col)
  const { isFocused } = useFocus({ id: focusId, autoFocus: first, isActive: sortable })
  const { isRawModeSupported } = useStdin()

  // Ink handles Tab focus; only the focused sortable heading consumes Enter/Space.
  useInput(
    (input, key) => {
      if (key.return || input === ' ') onSort(col.id)
    },
    { isActive: sortable && isFocused && isRawModeSupported }
  )
  const sorted = sort?.id === col.id

  return (
    <Box ref={register} width="100%" height={1}>
      <Text bold={sorted} wrap="truncate-end">
        <Text underline={sortable}>{singleLine(col.label)}</Text>
        {sorted && (sort.direction === 'asc' ? ' ▲' : ' ▼')}
      </Text>
    </Box>
  )
}

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
