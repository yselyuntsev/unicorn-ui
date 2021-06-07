<template>
  <div class="u-sidebar">
    <div
      v-if="$slots.prepend || $scopedSlots.prepend"
      class="u-sidebar__prepend"
    >
      <slot name="prepend"></slot>
    </div>

    <div class="u-sidebar__body">
      <slot></slot>
    </div>

    <div v-if="$slots.append || $scopedSlots.append" class="u-sidebar__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-sidebar",
};
</script>

<style lang="scss" scoped>
.u-sidebar {
  @apply w-80 flex flex-col h-screen;
  @apply border-r border-gray-100;
  @apply bg-white shadow-sm overflow-y-scroll;

  &::-webkit-scrollbar {
    @apply w-3;
  }

  &::-webkit-scrollbar-track {
    @apply border-2 border-white;
  }

  &::-webkit-scrollbar-thumb {
    @apply rounded-full bg-white;
    border: 4px solid #ffffff;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      @apply bg-gray-200;
    }
  }

  &__prepend,
  &__append,
  &__body {
    @apply p-8;
  }

  &__body {
    @apply flex-1 flex flex-col;
  }
}
</style>
