<template>
  <div class="unicorn-list-item-icon">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UListItemIcon",
};
</script>

<style lang="scss" scoped>
.unicorn-list-item-icon {
  @apply mr-4 self-start;
}
</style>
