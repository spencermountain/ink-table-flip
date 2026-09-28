import React from 'react'
import { Box, Text } from 'ink'
import Cell from './Cell.jsx'
import { singleLine } from './_lib/columns.js'
import fmts from './_lib/fmt.js'

export default function Row({ values, cols, sort }) {
  return (
    <Box flexShrink={0}>
      {cols.map((col, index) => (
        <Cell key={col.id} col={col} last={index === cols.length - 1}>
          <Text
            wrap="truncate-end"
            color={col.color || 'white'}
            dimColor={col.dim}
            bold={sort?.id === col.id || col.bold}
            underline={col.underline}
          >
            {fmts[col.format || 'text'](values[index], col)}
          </Text>
        </Cell>
      ))}
    </Box>
  )
}
