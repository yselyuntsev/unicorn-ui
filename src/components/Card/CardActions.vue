<template>
  <div class="unicorn-card-actions">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardActions",
};
</script>

<style lang="scss" scoped>
.unicorn-card-actions {
  @apply flex items-center;
  @apply p-4 text-gray-700;
}
</style>
