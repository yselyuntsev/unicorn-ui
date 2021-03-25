<template>
  <div class="unicorn-collapse" :class="{ expanded }">
    <div class="unicorn-collapse__header" @click="toggle">
      <u-icon icon="mdi-chevron-down" class="unicorn-collapse__icon" />
      <slot name="header"></slot>
    </div>

    <div v-if="expanded" ref="body" class="unicorn-collapse__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UIcon from "@/components/UIcon";

export default {
  name: "UCollapse",
  components: { UIcon },

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
    @apply pl-8;
  }

  &__body {
    @apply pt-8;
  }

  &__icon {
    @apply transition-all absolute left-0;
  }

  &.expanded {
    @apply py-4 border-t border-b;

    .unicorn-collapse__icon {
      @apply transform-gpu -rotate-90;
    }
  }
}
</style>
