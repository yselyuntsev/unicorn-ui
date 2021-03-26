<template>
  <ul class="unicorn-list" :class="{ bordered }">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "UList",
  props: {
    bordered: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-list {
  @apply flex flex-col p-2;

  &.bordered {
    .unicorn-list-item {
      @apply mt-0 mb-2;

      &:after {
        content: "";
        @apply right-0 absolute left-0 -bottom-1 h-px bg-gray-100;
      }

      &:last-child {
        @apply m-0;

        &:after {
          @apply hidden;
        }
      }
    }
  }
}
</style>
