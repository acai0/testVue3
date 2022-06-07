<template>
  <div class="about">
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style scoped>
button {
  font-weight: bold;
}
</style>
