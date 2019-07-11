// A functional component for renderer tr element.
import tr from './tr.vue';

function getCellValue(row, column, index) {
  return column.pid ? (row[column.pid] && row[column.pid].length > index ? row[column.pid][index][column.id] : '') : row[column.id]
}

export default {
  functional: true,
  props: {
    row: {
      required: true,
      type: Object
    },
    columns: {
      required: true,
      type: Array
    },
    subColumns: {
      required: false,
      type: Array,
      default: function () { return []; }
    }
  },
  render(createElement, context) {
    let row = context.props.row
    let trs = []

    // main tr
    trs.push(createElement(tr, {
      props: {
        row: row,
        cells: context.props.columns.map(column => {
          // { rowspan, colspan, value, column}
          return {
            column: column,
            rowspan: column.pid ? 1 : row.rowspan,
            value: getCellValue(row, column, 0)
          }
        })
      }
    }))

    // sub trs
    let len = row.rowspan || 1
    for (let i = 1; i < len; i++) {
      trs.push(createElement(tr, {
        props: {
          row: row,
          cells: context.props.subColumns.map((column, index) => {
            // { rowspan, colspan, value, column}
            return {
              column: column,
              value: getCellValue(row, column, i)
            }
          })
        }
      }))
    }

    return trs
  },
};