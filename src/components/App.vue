<template>
  <div class="unicorn-app">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.unicorn-app {
  @apply flex;
}
</style>
