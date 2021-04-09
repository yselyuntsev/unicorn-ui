<template>
  <div v-click-outside="close" class="unicorn-menu">
    <div class="d">
      <slot name="activator" :toggle="toggle"></slot>
    </div>

    <transition name="menu">
      <div
        v-if="active"
        class="unicorn-menu__body"
        :class="{ 'left-0': left, 'right-0': right }"
        :style="{ width: width + 'px', maxWidth: width + 'px' }"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from "@/directives/click-outside";

export default {
  name: "UMenu",

  directives: {
    ClickOutside,
  },

  props: {
    width: { type: [String, Number], default: 196 },
    left: { type: Boolean },
    right: { type: Boolean },
  },

  data() {
    return {
      active: false,
    };
  },

  watch: {
    active: {
      handler(newValue) {
        if (newValue) {
          window.addEventListener("scroll", this.close);
        } else {
          window.removeEventListener("scroll", this.close);
        }
      },
    },
  },

  methods: {
    toggle() {
      this.active = !this.active;
    },

    close() {
      this.active = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-menu {
  @apply relative inline-flex;

  &__body {
    @apply top-12 absolute z-30;
  }
}

.menu-enter-active,
.menu-leave-active {
  @apply transition-all;
}
.menu-enter,
.menu-leave-to {
  @apply opacity-0;
  @apply transform-gpu -translate-y-2;
}
</style>
