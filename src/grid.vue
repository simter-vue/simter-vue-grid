<template>
  <div class="st-grid">
    <div class="header">{{ columns }}</div>
    <div class="content">
      <table border="1">
        <tbody>
          <template v-for="(row, rowIndex) in rows">
            <tr :key="rowIndex">
              <td
                v-for="(column, columnIndex) in flattenColumns"
                :key="columnIndex"
                :rowspan="column.pid ? 1 : row['rowspan'] || 1"
              >{{column.pid ? (row[column.pid] && row[column.pid].length ? row[column.pid][0][column.id] : '') : row[column.id]}}</td>
            </tr>
            <tr :key="rowIndex + '-' + n" v-for="n in (row['rowspan'] || 1) - 1">
              <td
                v-for="(column, columnIndex) in subColumns"
                :key="columnIndex"
              >{{column.pid ? (row[column.pid] && row[column.pid].length > n ? row[column.pid][n][column.id] : '') : row[column.id]}}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const test = (debug = false) => debug;
import flatten from "./flatten";

export default {
  props: {
    columns: { type: Array, required: true },
    rows: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      debug: test()
    };
  },
  computed: {
    flattenColumns() {
      return flatten(this.columns);
    },
    subColumns() {
      return this.flattenColumns.filter(c => c.pid);
    }
  }
};
</script>

<style>
.st-grid {
  display: flex;
  flex-direction: column;
}
.st-grid > * {
  flex: none;
}
.st-grid > .content {
  flex: 1 1 0%;
  overflow: auto;
}
.st-grid > .content > table {
}
</style>