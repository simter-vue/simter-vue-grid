<template>
  <tr>
    <td
      v-for="(cell, index) in cells"
      :key="index"
      :rowspan="cell.rowspan"
      :colspan="cell.colspan"
    >{{cell.value}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    row: {
      required: true,
      type: Object
    },
    // [{ rowspan, colspan, value, column }, ...]
    cells: {
      required: true,
      type: Array
    }
  }
};
</script>