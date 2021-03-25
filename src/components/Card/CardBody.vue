<template>
  <div class="unicorn-card-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardBody",
};
</script>

<style lang="scss" scoped>
.unicorn-card-body {
  @apply p-4 text-gray-700;
}
</style>
