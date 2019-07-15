<template>
  <div>
    <div>
      <input type="checkbox" v-model="customWidth" />
      Custom width:
      <input type="range" min="5" end="100" v-model="widthValue" />
      {{widthValue}} {{unit}}
    </div>
    <div>
      <input type="checkbox" v-model="customHeight" />
      Custom height:
      <input type="range" min="5" end="100" v-model="heightValue" />
      {{heightValue}} {{unit}}
    </div>
    <st-grid
      :style="{width: width, height: height, border: '1px solid #666'}"
      :columns="columns"
      :rows="rows"
    ></st-grid>
  </div>
</template>

<script>
import grid from "../src/grid.vue";
export default {
  data() {
    return {
      unit: "em",
      customWidth: false,
      widthValue: 30,
      customHeight: false,
      heightValue: 8,
      columns: [
        { label: "SN", cell: "st-cell-sn" },       // test st-cell-sn (global)
        { label: "Index", cell: "st-cell-index" }, // test st-cell-index
        { id: "id", label: "ID" },                 // test st-cell-text (default)
        { id: "name", label: "Name" },             // test st-cell-text (default)
        { id: "website", label: "Website" },       // test st-cell-text (default)
        {                                          // test st-cell-fn
          label: "Link",
          cell: {
            component: "st-cell-fn",
            fn(row, rowIndex) {
              return row.website ? `<a href="https://${row.website}">Go</a>`: "";
            },
            isHtml: true
          }
        },
        {
          label: "Partners",
          children: [
            { label: "SN", cell: "st-cell-sn" },                  // test st-cell-sn (global)
            { pid: "partners", label: "SN", cell: "st-cell-sn" }, // test st-cell-sn (local)
            { pid: "partners", id: "name", label: "Name" }
          ]
        },
        {
          label: "Commiters",
          children: [
            { pid: "commiters", label: "SN", cell: "st-cell-sn" },
            { pid: "commiters", id: "name", label: "Name" }
          ]
        }
      ],
      rows: [
        { id: "bing", name: "Bing", website: "bing.com" },
        { id: "google", name: "Google", website: "google.com", partners: [] },
        {
          id: "baidu",
          name: "BaiDu",
          website: "baidu.com", 
          partners: [{ name: "P 31" }]
        },
        {
          rowspan: 2,
          id: "so",
          name: "360",
          website: "www.so.com",
          partners: [{ name: "P 41" }],
          commiters: [{ name: "C 41" }, { name: "C 42" }]
        },
        {
          rowspan: 3,
          id: "doge",
          name: "DogeDoge",
          website: "dogedoge.com",
          partners: [
            { name: "P 51" },
            { name: "P 52" },
            { name: "P 53" }
          ],
          commiters: [{ name: "C 51" }, { name: "C 52" }]
        }
      ]
    };
  },
  components: {
    "st-grid": grid
  },
  computed: {
    width() {
      if (this.customWidth) return this.widthValue + this.unit;
      else return "auto";
    },
    height() {
      if (this.customHeight) return this.heightValue + this.unit;
      else return "auto";
    }
  }
};
</script>
<style>
input {
  background-color: inherit;
  color: inherit;
}
</style>
