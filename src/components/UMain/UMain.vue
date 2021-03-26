<template>
  <div class="unicorn-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UMain",
};
</script>

<style lang="scss" scoped>
.unicorn-main {
  @apply container mx-auto px-4 md:px-8 pb-16 md:pb-0;
}
</style>
