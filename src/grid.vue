<template>
  <div>{{ debug }}</div>
</template>

<script>
const test = (debug = false) => debug;

export default {
  data() {
    return {
      debug: test()
    };
  }
};
</script>