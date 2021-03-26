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
.unicorn-simple-table {
  @apply table w-full;

  thead {
    @apply border-b border-gray-100;
  }

  th {
    @apply pb-4 px-4 text-left font-medium text-sm;
    @apply text-gray-500;
  }

  tr {
    @apply border-t border-gray-100;
  }

  td {
    @apply px-4 py-2 text-gray-700;
  }
}
</style>
