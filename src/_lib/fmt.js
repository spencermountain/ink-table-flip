import spacetime from 'spacetime'
import { singleLine } from './columns.js'

const wrap = function (val, col) {
  let out = `${col.prefix || ''}${val}${col.suffix || ''}`
  return singleLine(out)
}

const fmts = {
  text: function (val, col) {
    return wrap(val, col)
  },
  titlecase: function (val = '', col) {
    let str = val.charAt(0).toUpperCase() + val.slice(1)
    return wrap(str, col)
  },
  lowercase: function (val, col) {
    let str = val.toLowerCase()
    return wrap(str, col)
  },
  number: function (val, col) {
    let n = Number(val)
    if (isNaN(n)) {
      return val
    }
    return wrap(n.toLocaleString(), col)
  },
  float: function (val, col) {
    let n = Number(val)
    if (isNaN(n)) {
      return val
    }
    return wrap(n.toFixed(1), col)
  },
  percentage: function (val, col) {
    let n = Number(val)
    if (isNaN(n)) {
      return val
    }
    return wrap(`${n.toLocaleString()}%`, col)
  },
  iso: function (val, col) {
    let s = spacetime(val)
    if (!s.isValid()) {
      return val
    }
    return wrap(s.format('iso'), col)
  },
  'month-year': function (val, col) {
    let s = spacetime(val)
    if (!s.isValid()) {
      return val
    }
    return wrap(s.format('{month-short} {year}'), col)
  },
  'nice-date': function (val, col) {
    let s = spacetime(val)
    if (!s.isValid()) {
      return val
    }
    return wrap(s.format('{month-short} {date-pad} {year}'), col)
  }
}

export default fmts
