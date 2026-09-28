import type { ReactElement } from 'react'
import type { BoxProps, TextProps } from 'ink'

export type Format =
  | 'text'
  | 'titlecase'
  | 'lowercase'
  | 'number'
  | 'float'
  | 'percentage'
  | 'iso-date'
  | 'nice-date'

export type ColumnId<Row> = Row extends readonly unknown[]
  ? number
  : Extract<keyof Row, string | number>

export interface Column<Row extends object = Record<string, unknown>> {
  id: ColumnId<Row>
  label: string
  color?: TextProps['color']
  dim?: boolean
  bold?: boolean
  underline?: boolean
  flexBasis?: BoxProps['flexBasis']
  minWidth?: BoxProps['minWidth']
  maxWidth?: BoxProps['maxWidth']
  sortable?: boolean
  /** Enables sorting; use sorted to select the initial sort column. */
  sort?: boolean
  /** Start ascending on this column. Also set sortable: true or sort: true. */
  sorted?: boolean
  /** number defaults to number formatting; other values default to text. */
  type?: 'text' | 'number' | 'date'
  format?: Format
  prefix?: string
  suffix?: string
}

export interface TableProps<Row extends object = Record<string, unknown>> {
  rows?: readonly Row[]
  cols?: readonly Column<Row>[]
}

export default function Table<Row extends object = Record<string, unknown>>(
  props: TableProps<Row>
): ReactElement | null
