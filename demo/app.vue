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
        { id: "sn", label: "No." },
        { id: "name" },
        {
          id: "items1",
          children: [
            { pid: "items1", id: "sn", label: "No." },
            { pid: "items1", id: "name", label: "Name" }
          ]
        },
        { id: "remark", label: "Remark" },
        {
          id: "items2",
          children: [
            { pid: "items2", id: "sn", label: "No." },
            { pid: "items2", id: "name", label: "Name" }
          ]
        }
      ],
      rows: [
        { sn: 1, name: "Main 1", remark: "- | -" },
        { sn: 2, name: "Main 2", items1: [], remark: "0 | -" },
        {
          sn: 3,
          name: "Main 3",
          items1: [{ sn: 1, name: "A 3-1" }],
          remark: "1 | -"
        },
        {
          rowspan: 2,
          sn: 4,
          name: "Main 4",
          items1: [{ sn: 1, name: "A 4-1" }],
          remark: "1 | 2",
          items2: [{ sn: 1, name: "B 4-1" }, { sn: 2, name: "B 4-2" }]
        },
        {
          rowspan: 3,
          sn: 5,
          name: "Main 5",
          items1: [
            { sn: 1, name: "A 5-1" },
            { sn: 2, name: "A 5-2" },
            { sn: 3, name: "A 5-3" }
          ],
          remark: "3 | 2",
          items2: [{ sn: 1, name: "B 5-1" }, { sn: 2, name: "B 5-2" }]
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
