<template>
  <div class="unicorn-app">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UApp",
};
</script>

<style lang="scss" scoped>
.unicorn-app {
  @apply flex flex-col md:flex-row;
}
</style>
