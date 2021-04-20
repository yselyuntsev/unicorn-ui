<template>
  <div class="u-dialog" :class="{ sheet }">
    <slot name="activator" :open="open"></slot>

    <transition name="fade" appear @before-enter="beforeEnter">
      <div @click.self="close" class="u-dialog__body" v-if="show">
        <transition name="zoom" @before-leave="beforeLeave">
          <div
            v-if="showContent"
            class="u-dialog__content"
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
    sheet: Boolean,
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

.u-dialog {
  @apply relative flex;

  &__body {
    @apply flex p-4 justify-center items-center;
    @apply fixed inset-0;
    @apply bg-black bg-opacity-60;
  }

  &__content {
    @apply w-full;
  }

  & .pulse {
    animation: pulse 150ms ease-in-out;
  }

  &.sheet {
    .u-dialog__body {
      @apply items-end;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-all;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
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
