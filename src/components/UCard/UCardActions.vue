<template>
  <div class="unicorn-card-actions">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UCardActions",
};
</script>

<style lang="scss" scoped>
.unicorn-card-actions {
  @apply flex items-center;
  @apply px-4 py-2 text-gray-700;
}
</style>
