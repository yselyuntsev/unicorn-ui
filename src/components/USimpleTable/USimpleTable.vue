<template>
  <table class="unicorn-simple-table">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: "USimpleTable",
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-simple-table {
  @apply table w-full text-sm;

  thead {
    @apply bg-gray-100;
  }

  th {
    @apply py-3 px-4 text-left font-medium text-xs uppercase;
    @apply text-gray-400;
  }

  tr {
    @apply transition-all;

    &:nth-child(2n) {
      @apply bg-gray-50;
    }

    @include hover {
      &:hover {
        @apply bg-white;
      }
    }
  }

  td {
    @apply px-4 py-4;
  }
}
</style>
