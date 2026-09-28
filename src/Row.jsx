import React from 'react'
import { Box, Text } from 'ink'
import Cell from './Cell.jsx'
import { singleLine } from './_lib/columns.js'

export default function Row({ values, cols, sort }) {
  return (
    <Box flexShrink={0}>
      {cols.map((col, index) => (
        <Cell key={col.id} col={col} last={index === cols.length - 1}>
          <Text
            wrap="truncate-end"
            color={col.color}
            dimColor={col.dim}
            bold={sort?.id === col.id || col.bold}
            underline={col.underline}
          >
            {singleLine(values[index])}
          </Text>
        </Cell>
      ))}
    </Box>
  )
}
