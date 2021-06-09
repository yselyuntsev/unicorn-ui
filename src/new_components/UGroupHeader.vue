<template>
  <div class="u-group-header">
    <div class="u-group-header__title">
      <span class="truncate">
        <slot></slot>
      </span>
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
    @apply flex h-11 items-center mr-2;
    @apply text-xl font-bold truncate;
  }

  &__actions {
    @apply inline-flex items-center ml-2;
  }
}
</style>
