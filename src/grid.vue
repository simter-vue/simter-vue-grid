<template>
  <div class="st-grid">
    <div class="header">
      <table border="1">
        <st-colgroup :columns="columns"></st-colgroup>
        <st-thead :columns="columns"></st-thead>
      </table>
    </div>
    <div class="content">
      <table border="1">
        <st-colgroup :columns="columns"></st-colgroup>
        <tbody>
          <template v-for="(row, index) in rows">
            <st-row
              :key="index"
              :row="row"
              :index="index"
              :columns="flattenColumns"
              :sub-columns="subColumns"
            ></st-row>
          </template>
        </tbody>
      </table>
    </div>
    <div class="footer">TODO: footer</div>
  </div>
</template>

<script>
import flatten from "./utils/flatten";
import stRow from "./row/row";
import stColgroup from "simter-vue-colgroup";
import stThead from "simter-vue-thead";

export default {
  components: { stColgroup, stThead, stRow },
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
.st-grid > .content > table, .st-grid > .header > table {
  width: 100%;
}
</style>