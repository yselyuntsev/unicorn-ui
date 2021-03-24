<template>
  <div v-click-outside="close" class="unicorn-menu">
    <slot name="activator" :toggle="toggle"></slot>

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
  name: "Menu",

  directives: {
    ClickOutside,
  },

  props: {
    width: { type: [String, Number] },
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
    @apply absolute top-0;
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
