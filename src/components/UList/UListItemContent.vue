<template>
  <div class="unicorn-list-item-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UListItemContent",
};
</script>

<style lang="scss" scoped>
.unicorn-list-item-content {
  @apply block w-full;
}
</style>
