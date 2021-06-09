<template>
  <div class="u-main">
    <slot name="prepend"></slot>

    <div class="u-main__container">
      <slot></slot>
    </div>

    <slot name="append"></slot>
  </div>
</template>

<script>
export default {
  name: "u-main",
};
</script>

<style lang="scss" scoped>
.u-main {
  @apply flex-1 overflow-y-auto flex flex-col;

  &__container {
    @apply max-w-4xl mx-auto px-4 flex flex-1 flex-col;
  }
}
</style>
