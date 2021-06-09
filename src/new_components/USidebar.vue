<template>
  <div :class="classes" :style="styles">
    <div class="u-sidebar-splash"></div>

    <div
      v-if="$slots.prepend || $scopedSlots.prepend"
      class="u-sidebar__prepend"
    >
      <slot name="prepend"></slot>
    </div>

    <div class="u-sidebar__body">
      <slot></slot>
    </div>

    <div v-if="$slots.append || $scopedSlots.append" class="u-sidebar__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import Toggleable from "../mixins/toggleable";
import overlayable from "../mixins/overlayable";

export default {
  name: "u-sidebar",

  inject: ["breakpoints"],
  mixins: [Toggleable, overlayable],

  props: {
    width: {
      type: Number,
      default: 320,
    },
  },

  computed: {
    temporary() {
      return !this.breakpoints.lg;
    },

    transform() {
      if (!this.temporary) return 0;
      return this.isActive ? 0 : -100;
    },

    showOverlay() {
      return this.isActive && this.temporary;
    },

    classes() {
      return {
        "u-sidebar": true,
        "u-sidebar--open": this.isActive,
        "u-sidebar--temporary": this.temporary,
      };
    },

    styles() {
      return {
        transform: `translateX(${this.transform}%)`,
        maxWidth: this.temporary ? "280px" : this.width + "px",
        minWidth: this.temporary ? "280px" : this.width + "px",
      };
    },
  },

  watch: {
    showOverlay: {
      handler(value) {
        this.$nextTick(() => {
          value ? this.generateOverlay() : this.removeOverlay();
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.u-sidebar {
  @apply flex flex-col h-screen;
  @apply border-r border-gray-100;
  @apply bg-white shadow-sm overflow-y-scroll;
  @apply transition-all;

  &::-webkit-scrollbar {
    @apply w-3;
  }

  &::-webkit-scrollbar-track {
    @apply border-2 border-white;
  }

  &::-webkit-scrollbar-thumb {
    @apply rounded-full bg-white;
    border: 4px solid #ffffff;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      @apply bg-gray-200;
    }
  }

  &__prepend,
  &__append,
  &__body {
    @apply p-8;
  }

  &__body {
    @apply flex-1 flex flex-col;
  }

  &--temporary {
    @apply fixed h-screen z-50 left-0 top-0;
  }

  &--temporary &__prepend,
  &--temporary &__append,
  &--temporary &__body {
    @apply px-4 py-8;
  }
}
</style>
