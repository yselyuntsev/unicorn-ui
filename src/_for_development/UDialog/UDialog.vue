<template>
  <div class="unicorn-dialog">
    <slot name="activator" :open="open"></slot>

    <transition name="fade" appear @before-enter="beforeEnter">
      <div @click.self="close" class="unicorn-dialog__body" v-if="show">
        <transition name="zoom" @before-leave="beforeLeave">
          <div
            v-if="showContent"
            class="unicorn-dialog__content"
            :class="{ pulse: animatePersistent }"
            :style="{ width: width + 'px', maxWidth: width + 'px' }"
          >
            <slot></slot>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "UDialog",

  model: {
    prop: "value",
    event: "update",
  },

  props: {
    value: { type: Boolean, default: null },
    width: { type: [String, Number] },
    persistent: Boolean,
  },

  data() {
    return {
      show: false,
      showContent: false,
      animatePersistent: false,
    };
  },

  watch: {
    value: {
      handler(newValue) {
        if (newValue) {
          this.show = true;
        } else {
          this.showContent = false;
        }
      },
      immediate: true,
    },
  },

  methods: {
    beforeEnter() {
      this.showContent = true;
      this.$emit("update", true);
    },

    beforeLeave() {
      this.show = false;
      this.$emit("update", false);
    },

    open() {
      this.show = true;
    },

    close() {
      if (this.persistent) {
        this.animatePersistent = true;
        setTimeout(() => {
          this.animatePersistent = false;
        }, 150);
        return;
      }

      this.showContent = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.unicorn-dialog {
  @apply relative flex;

  &__body {
    @apply flex p-4 justify-center items-center;
    @apply fixed z-50 inset-0;
    @apply bg-black bg-opacity-60;
  }

  &__content {
    @apply w-full;
  }

  & .pulse {
    animation: pulse 150ms ease-in-out;
  }
}

.zoom-enter-active,
.zoom-leave-active {
  @apply transition-all;
}
.zoom-enter,
.zoom-leave-to {
  @apply transform-gpu translate-y-16 opacity-0;
}
</style>
