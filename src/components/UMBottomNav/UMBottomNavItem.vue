<template>
  <div
    class="unicorn-m-bottom-nav-item"
    :class="[{ active }]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div
      class="unicorn-m-bottom-nav-item__inner"
      ref="item"
      :style="{ width: !active ? '40px' : maxWidth + 'px' }"
    >
      <u-icon class="unicorn-m-bottom-nav-item__inner-icon" :icon="icon" />
      <span class="unicorn-m-bottom-nav-item__inner-text">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
import UIcon from "@/components/UIcon";

export default {
  name: "UMBottomNavItem",
  components: { UIcon },

  props: {
    icon: { type: String },
    active: { type: Boolean },
  },

  data() {
    return {
      maxWidth: 0,
    };
  },

  mounted() {
    this.maxWidth = this.$refs.item.scrollWidth;
    console.log(this.maxWidth);
  },
};
</script>

<style lang="scss" scoped>
.unicorn-m-bottom-nav-item {
  @apply flex flex-1 items-center justify-center h-full;

  &__inner {
    min-height: 2.5rem;
    max-height: 2.5rem;
    min-width: 2.5rem;
    //max-width: 2.5rem;

    @apply inline-flex items-center;
    @apply rounded-md transition-all overflow-hidden;
    @apply text-gray-500 relative transition-all;
  }

  &__inner-text {
    @apply ml-10 pr-4 text-sm font-medium;
    @apply text-purple-600 invisible;
  }

  &__inner-icon {
    @apply absolute left-2;
  }

  &.active {
    .unicorn-m-bottom-nav-item__inner {
      @apply bg-purple-200 text-purple-500;
    }

    .unicorn-m-bottom-nav-item__inner-text {
      @apply visible;
    }
  }

  &:active {
    .unicorn-m-bottom-nav-item__inner {
      @apply transform-gpu scale-90;
    }
  }
}
</style>
