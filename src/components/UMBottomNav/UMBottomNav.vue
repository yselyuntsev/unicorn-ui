<template>
  <nav class="unicorn-m-bottom-nav">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "UMBottomNav",
};
</script>

<style lang="scss" scoped>
.unicorn-m-bottom-nav {
  @apply h-14 fixed z-30 bottom-0 left-0 right-0 bg-white;
  @apply flex items-center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px -4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px -2px 4px -1px;
}
</style>
