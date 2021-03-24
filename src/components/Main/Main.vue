<template>
  <div class="unicorn-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
.unicorn-main {
  @apply flex-1;
}
</style>
