<template>
  <div class="u-group-header">
    <div class="u-group-header__title">
      <slot></slot>
    </div>

    <div class="u-group-header__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-group-header",
};
</script>

<style lang="scss" scoped>
.u-group-header {
  @apply flex items-center justify-between;
  @apply pt-8 pb-4;

  &__title {
    @apply flex flex-1 h-11 items-center mr-4;
    @apply text-xl font-bold;
  }

  &__actions {
    @apply inline-flex items-center ml-4;
  }
}
</style>
