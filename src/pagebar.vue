<template>
  <table class="st-pagebar">
    <tbody>
      <tr>
        <td class="icon first" @click.prevent.stop="toPage(1)">⋘</td>
        <td class="icon previous" @click.prevent.stop="toPage(Math.max(v.pageNo - 1, 1))">&lt;</td>
        <td class="icon text">
          <span v-if="total > 0">{{v.pageNo}}/{{pageCount}}({{total}})</span>
          <span v-else>0</span>
        </td>
        <td class="icon next" @click.prevent.stop="toPage(Math.min(v.pageNo + 1, pageCount))">&gt;</td>
        <td class="icon last" @click.prevent.stop="toPage(pageCount)">⋙</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import stButton from "../button/button.vue";

/**
 * 分页条组件
 * <pre>
 *   <st-pagebar
 *     [:page-no="pageNo"]
 *     [:page-size="pageSize"]
 *     [:page-sizes="pageSizes"]
 *     [:total="total"]
 *     [@change="reload"]>
 *   <st-pagebar
 * </pre>
 */
const DEFAULT_PAGE_SIZE = window["SIMTER_PAGEBAR_DEFAULT_PAGE_SIZE"] || 25;
const DEFAULT_PAGE_SIZES = window["SIMTER_PAGEBAR_DEFAULT_PAGE_SIZES"] || [
  25,
  50,
  100
];

export default {
  components: { stButton },
  props: {
    /** The current 1-base page number */
    pageNo: { type: Number, required: false, default: 0 },
    /** The maximal elements count of one page */
    pageSize: { type: Number, required: false, default: DEFAULT_PAGE_SIZE },
    /** The candidate page-size */
    pageSizes: {
      type: Array,
      required: false,
      default: () => DEFAULT_PAGE_SIZES
    },
    /** The total elements count */
    total: { type: Number, required: false, default: 0 }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  data() {
    return { v: { pageNo: 1 } };
  },
  created() {
    this.v.pageNo = this.pageNo;
  },
  methods: {
    toPage(pageNo) {
      if (pageNo !== this.v.pageNo) {
        this.v.pageNo = pageNo;
        this.$emit("change", "changePageNo", pageNo, this.pageSize);
      }
    }
  }
};
</script>

<style>
/* default pagebar style */
.st-pagebar {
  position: relative;
  table-layout: fixed;
  border-collapse: collapse;
}
.st-pagebar > tbody > tr > td:not(.text) {
  cursor: pointer;
}
.st-pagebar > tbody > tr > td.text {
  cursor: default;
}
</style>