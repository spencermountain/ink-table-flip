const setupCols = (cols) => {
  return cols.map((col) => {
    let format = col.format
    if (!format) {
      format = col.type === 'number' ? 'number' : 'text'
    }
    let flexBasis = col.flexBasis ?? 1
    return {
      ...col,
      format,
      flexBasis
    }
  })
}
export { setupCols }
