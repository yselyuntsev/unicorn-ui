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
  @apply bg-white py-2 rounded-lg;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
</style>
