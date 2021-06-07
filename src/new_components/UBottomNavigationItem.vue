<template>
  <div class="u-bottom-navigation-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "u-bottom-navigation-item",
};
</script>

<style lang="scss" scoped>
.u-bottom-navigation-item {
  @apply flex flex-1 justify-center items-center;
}
</style>
