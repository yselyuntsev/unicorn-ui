<template>
  <li
    class="unicorn-list-item"
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ clickable: $listeners.click }"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "UListItem",
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-list-item {
  @apply flex w-full relative items-center py-2 my-0.5 px-4 rounded-md;
  @apply transition-all text-sm font-medium origin-left text-gray-700;

  &.clickable {
    @include hover {
      &:hover {
        @apply bg-gray-50 cursor-pointer;
      }
    }

    &:active {
      @apply bg-gray-100 shadow-inner;
    }
  }
}
</style>
