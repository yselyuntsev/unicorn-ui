<template>
  <p class="unicorn-sidebar-subtitle">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "SidebarSubtitle",
};
</script>

<style lang="scss" scoped>
.unicorn-sidebar-subtitle {
  @apply text-xs font-medium text-gray-400 px-4 mt-8;
  @apply transition-all;
}
</style>
