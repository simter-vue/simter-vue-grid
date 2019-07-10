<template>
<st-grid 
  :columns="columns" 
  :rows="rows">
</st-grid>
</template>

<script>
import grid from "../src/grid.vue";
export default {
  data() {
    return {
      columns: [
        { id: "sn", label: "No."},
        { id: "name"},
        { 
          id: "items", 
          children: [
            { id: "sn", label: "No."},
            { id: "name", label: "Name"},
          ]
        }
      ],
      rows: [
        { sn: 1, name: "Main 1"},
        { 
          sn: 2, 
          name: "Main 2", 
          items: [
            { sn: 1, name: "Sub 2-1"},
            { sn: 2, name: "Sub 2-2"},
          ] 
        },
        { sn: 3, name: "Main 3", items: [] },
        { sn: 4, name: "Main 4", items: [{ sn: 1, name: "Sub 4-1"}] }
      ]
    };
  },
  components: {
    "st-grid": grid
  }
};
</script>