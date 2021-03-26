<template>
  <div class="unicorn-card-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UCardTitle",
};
</script>

<style lang="scss" scoped>
.unicorn-card-title {
  @apply p-4;
  @apply text-xl font-bold text-gray-700;
}
</style>
