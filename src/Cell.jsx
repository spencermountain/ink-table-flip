import React from 'react'
import { Box } from 'ink'

// Share column sizing so headings and body cells stay aligned.
export default function Cell({ col, last, children }) {
  return (
    <Box
      flexBasis={col.flexBasis ?? 0}
      flexGrow={1}
      flexShrink={1}
      minWidth={col.minWidth ?? 0}
      maxWidth={col.maxWidth}
      height={1}
      paddingRight={last ? 0 : 2}
      justifyContent="flex-start"
    >
      {children}
    </Box>
  )
}
