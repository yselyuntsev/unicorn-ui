<template>
  <li
    class="unicorn-list-item"
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ clickable: $listeners.click }"
  >
    <div v-if="$slots.icon" class="unicorn-list-item__icon">
      <slot name="icon" />
    </div>

    <div class="unicorn-list-item__content">
      <slot></slot>
    </div>

    <div v-if="$slots.right" class="unicorn-list-item__right">
      <slot name="right" />
    </div>
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
  @apply flex w-full relative items-center py-2 px-4 rounded-md;
  @apply transition-all origin-left;

  @include hover {
    &:hover {
      @apply bg-gray-50 cursor-pointer;
    }
  }

  &__icon {
    @apply mr-4 self-start;
  }

  &__content {
    @apply flex-1 flex flex-col;
  }

  &__right {
    @apply ml-4;
  }

  &.clickable {
    &:active {
      @apply bg-gray-100 transform-gpu scale-90;
    }
  }
}
</style>
