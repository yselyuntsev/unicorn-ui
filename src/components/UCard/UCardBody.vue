<template>
  <div class="unicorn-card-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UCardBody",
};
</script>

<style lang="scss" scoped>
.unicorn-card-body {
  @apply px-4 py-2 text-gray-700;
}
</style>
