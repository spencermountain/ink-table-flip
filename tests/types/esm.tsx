import Table, { type Column, type Format, type TableProps } from 'ink-table-flip'

interface Episode { title: string; episode: number }
const rows: Episode[] = [{ title: 'Kamp Krusty', episode: 1 }]
const cols: Column<Episode>[] = [
  { id: 'title', label: 'Title', sortable: true, sorted: true, maxWidth: 30 },
  { id: 'episode', label: 'Episode', format: 'number', color: 'magenta', flexBasis: '25%' }
]
const props: TableProps<Episode> = { rows, cols }
;<Table {...props} />
;<Table rows={rows} cols={[{ id: 'title', label: 'Title' }]} />
;<Table rows={[["Toronto", 'CA', 43.65]]} cols={[{ id: 0, label: 'City' }]} />
;<Table rows={[['Toronto', 'CA'] as const]} cols={[{ id: 1, label: 'Country' }]} />
;<Table />

// @ts-expect-error Column must refer to an episode property.
const badColumn: Column<Episode> = { id: 'missing', label: 'Missing' }
// @ts-expect-error Unknown formats are not supported.
const badFormat: Format = 'currency'
// @ts-expect-error The component takes rows, not data.
;<Table data={rows} cols={cols} />
// @ts-expect-error Sorting flags are boolean.
;<Table rows={rows} cols={[{ id: 'title', label: 'Title', sorted: 'asc' }]} />
