<template>
  <div class="st-grid">
    <div class="header">{{ columns }}</div>
    <div class="content">
      <table border="1">
        <tbody>
          <template v-for="(row, index) in rows">
            <st-row :key="index" :row="row" :columns="flattenColumns" :sub-columns="subColumns"></st-row>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import flatten from "./utils/flatten";
import row from "./row/row";

export default {
  components: { "st-row": row },
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
</style>