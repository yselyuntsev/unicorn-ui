<template>
  <div class="unicorn-collapse" :class="{ expanded }">
    <div class="unicorn-collapse__header" @click="toggle">
      <slot name="header"></slot>
    </div>

    <div v-if="expanded" ref="body" class="unicorn-collapse__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UCollapse",

  data() {
    return {
      expanded: false,
    };
  },

  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-collapse {
  @apply py-2 border-gray-100;
  @apply transition-all;

  &__header {
    @apply pl-8 cursor-pointer;
  }

  &__body {
    @apply pt-8;
  }

  &.expanded {
    @apply py-4 border-t border-b;
  }
}
</style>
