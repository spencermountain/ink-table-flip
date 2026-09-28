import React, { useId, useRef } from 'react'
import { Box, useFocusManager } from 'ink'
import Row from './Row.jsx'
import Header from './Header/Index.jsx'
import useSort from './_lib/useSort.js'
import useHeaderClicks from './_lib/useHeaderClicks.js'
import { isSortable } from './_lib/columns.js'

/**
 * rows: objects keyed by column id.
 * cols: { id, label, color?, dim?, bold?, underline?, flexBasis?, minWidth?,
 *         sortable?, sort? }. Only one column may have sort: true.
 * Click a sortable heading, or focus it with Tab and press Enter/Space.
 */
export default function Table({ rows = [], cols = [] }) {
  const { sort, tableRows, toggleSort } = useSort(rows, cols)
  const headers = useRef(new Map())
  const focusPrefix = useId()
  const { focus } = useFocusManager()

  // Mouse and keyboard share the same transition and keep focus in sync.
  const onSort = (id) => {
    toggleSort(id)
    focus(`${focusPrefix}-${id}`)
  }
  useHeaderClicks(headers, onSort, cols.some(isSortable))
  if (cols.length === 0) return null

  // Clip only at the table boundary: nested Ink clipping can override its bounds.
  return (
    <Box flexDirection="column" width="100%" overflow="hidden" padding={1}>
      <Header
        cols={cols}
        sort={sort}
        onSort={onSort}
        headers={headers}
        focusPrefix={focusPrefix}
      />
      {tableRows.map((row, index) => (
        <Row key={index} cols={cols} sort={sort} values={cols.map((col) => row[col.id])} />
      ))}
    </Box>
  )
}
