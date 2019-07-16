<template>
  <div class="st-grid">
    <div class="header">
      <table
        border="1"
        :style="{left: v.scrollLeft + 'px', width: 'calc(100% - ' + v.scrollBarWidth + 'px)'}"
      >
        <st-colgroup :columns="columns"></st-colgroup>
        <st-thead :columns="columns"></st-thead>
      </table>
    </div>
    <div class="content" @scroll="v.scrollLeft = -1 * $event.target.scrollLeft">
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
    },
    lastColumnIsAutoWidth: { type: Boolean, required: false, default: false }
  },
  data: function() {
    return {
      v: { scrollLeft: 0, scrollBarWidth: 0, timer: null, contentEl: null }
    };
  },
  computed: {
    flattenColumns() {
      return flatten(this.columns);
    },
    subColumns() {
      return this.flattenColumns.filter(c => c.pid);
    }
  },
  mounted() {
    if (!this.lastColumnIsAutoWidth) {
      // watch horizon scrollbar size
      this.v.contentEl = this.$el.querySelector(".content"); // cache content el
      this.$_watchHorizonScrollBarSize();
    }
  },
  destroyed() {
    if (!this.lastColumnIsAutoWidth) clearInterval(this.v.timer);
  },
  methods: {
    $_watchHorizonScrollBarSize() {
      let t;
      this.v.timer = setInterval(() => {
        t = this.v.contentEl.offsetWidth - this.v.contentEl.clientWidth;
        if (t != this.v.scrollBarWidth) {
          // console.log("scrollBarWidth: %s > %s", this.v.scrollBarWidth, t);
          this.v.scrollBarWidth = t;
        }
      }, 100);
    },
    scrollContent($event) {
      this.v.scrollLeft = -1 * $event.target.scrollLeft;
    }
  }
};
</script>

<style>
.st-grid {
  display: flex;
  flex-direction: column;
  position: relative;
}
.st-grid > * {
  flex: none;
  position: relative;
}
.st-grid > .content {
  flex: 1 1 0%;
  overflow: auto;
}
.st-grid > .header {
  overflow: hidden;
}
.st-grid > .header > table {
  position: relative;
}
.st-grid > .content > table,
.st-grid > .header > table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
.st-grid td,
.st-grid th {
  padding: 0 0.4em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.st-grid tr {
  height: 2em;
}
</style>