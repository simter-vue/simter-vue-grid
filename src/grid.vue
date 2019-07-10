<template>
  <div class="st-grid">
    <div class="header">{{ columns }}</div>
    <div class="content">{{ rows }}</div>
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