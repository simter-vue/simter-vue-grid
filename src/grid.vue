<template>
<div>
  <div>{{ columns }}</div>
  <div>{{ rows }}</div>
</div>
</template>

<script>
const test = (debug = false) => debug;

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
  }
};
</script>