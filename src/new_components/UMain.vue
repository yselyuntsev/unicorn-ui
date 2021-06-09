<template>
  <div class="u-main">
    <slot name="prepend"></slot>

    <div class="u-main__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-main",
};
</script>

<style lang="scss" scoped>
.u-main {
  @apply flex-1 overflow-y-auto;

  &__container {
    @apply max-w-4xl mx-auto px-4;
  }
}
</style>
