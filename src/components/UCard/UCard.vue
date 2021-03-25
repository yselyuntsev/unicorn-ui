<template>
  <div class="unicorn-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UCard",
};
</script>

<style lang="scss" scoped>
.unicorn-card {
  @apply bg-white shadow-xl rounded-md border-gray-100 border;
}
</style>
