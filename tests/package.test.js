import test from 'tape'
import { readFileSync } from 'node:fs'
import { stripVTControlCharacters } from 'node:util'
import React from 'react'
import { renderToString } from 'ink'
import Table from 'ink-table-flip'
import { simpsons, cities, penguins } from './data/_cols.js'

const fixture = (name) =>
  JSON.parse(readFileSync(new URL(`./data/${name}.json`, import.meta.url), 'utf8'))
const episodes = fixture('simpsons_S4')
const cityRows = fixture('cities')
const penguinRows = fixture('penguins')

test('spacetime is bundled rather than imported at runtime', (t) => {
  const bundle = readFileSync(new URL('../builds/index.js', import.meta.url), 'utf8')
  t.notOk(/\bfrom\s+['"]spacetime(?:\/[^'"]*)?['"]/.test(bundle), 'no external spacetime import')
  t.end()
})

const renderTable = (rows, cols, width = 180) =>
  stripVTControlCharacters(
    renderToString(React.createElement(Table, { rows, cols }), { columns: width })
  )
const bodyLines = (output) =>
  output
    .split('\n')
    .slice(3)
    .filter((line) => line.trim())

test('package entry renders Simpsons headers and formatted rows without a JSX loader', (t) => {
  const output = renderTable(episodes.slice(0, 3), simpsons)
  t.ok(output.includes('Episode ▲'), 'initial sort indicator is displayed')
  t.ok(output.includes('Kamp Krusty'), 'episode title is displayed')
  t.ok(output.includes('Mark Kirkland'), 'director is displayed')
  t.ok(output.includes('21.8'), 'viewers use decimal formatting')
  t.ok(output.includes('Sep 24 1992'), 'air date uses readable date formatting')
  t.equal(bodyLines(output).length, 3, 'one body line per episode')
  t.end()
})

test('city array rows sort alphabetically without changing the input', (t) => {
  const rows = cityRows.slice(0, 3)
  const before = structuredClone(rows)
  const lines = bodyLines(renderTable(rows, cities))
  t.deepEqual(
    lines.map((line) => line.trim().split(/\s{2,}/)[0]),
    ['Dehra Dun', 'Dera Ismail Khan', 'Higashikurume'],
    'numeric column IDs support array rows and alphabetical sorting'
  )
  t.ok(lines[0].includes('IN'), 'country stays attached to its city')
  t.deepEqual(rows, before, 'sorting does not mutate the fixture rows')
  t.end()
})

test('episode numbers sort numerically', (t) => {
  const rows = [episodes[9], episodes[1], episodes[0]]
  const lines = bodyLines(renderTable(rows, simpsons.slice(0, 2)))
  t.deepEqual(
    lines.map((line) => Number(line.trim().split(/\s+/)[0])),
    [1, 2, 10],
    'episode 10 follows episode 2'
  )
  t.end()
})

test('penguin measurements sort numerically and keep their row values together', (t) => {
  const cols = penguins
    .filter((col) => ['Species', 'Body Mass (g)'].includes(col.id))
    .map((col) => ({ ...col, sorted: col.id === 'Body Mass (g)' }))
  const output = renderTable(penguinRows.slice(0, 3), cols)
  const lines = bodyLines(output)
  const expected = [3250, 3750, 3800].map((mass) => mass.toLocaleString())
  t.deepEqual(
    lines.map((line) => line.trim().split(/\s{2,}/)[1]),
    expected,
    'body mass is sorted and formatted with locale separators'
  )
  t.ok(
    lines.every((line) => line.includes('Adelie')),
    'species stays attached to each measurement'
  )
  t.end()
})

test('empty rows still display column headings', (t) => {
  const output = renderTable([], cities)
  t.ok(output.includes('Name ▲'), 'heading remains visible')
  t.equal(bodyLines(output).length, 0, 'no body rows are rendered')
  t.equal(renderTable(cityRows.slice(0, 3), []), '', 'no columns renders nothing')
  t.end()
})

test('long episode titles truncate within a narrow terminal', (t) => {
  const output = renderTable(episodes.slice(0, 3), [{ id: 'title', label: 'Title' }], 16)
  t.ok(
    output.split('\n').every((line) => line.length <= 16),
    'every line fits the terminal'
  )
  t.equal(bodyLines(output).length, 3, 'long titles do not wrap into extra rows')
  t.ok(output.includes('…'), 'long titles have a truncation indicator')
  t.end()
})
