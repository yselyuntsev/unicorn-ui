<template>
  <div class="unicorn-dialog">
    <slot name="activator" :open="open"></slot>

    <transition name="fade" @before-enter="showContent = true">
      <div @click.self="close" class="unicorn-dialog__body" v-if="show">
        <transition name="zoom" @before-leave="show = false">
          <div
            v-if="showContent"
            class="unicorn-dialog__content"
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

  props: {
    width: { type: [String, Number] },
  },

  data() {
    return {
      show: false,
      showContent: false,
    };
  },

  methods: {
    open() {
      this.show = true;
    },

    close() {
      this.showContent = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-dialog {
  @apply relative w-full;

  &__body {
    @apply flex p-4 justify-center items-center;
    @apply fixed z-50 inset-0;
    @apply bg-black bg-opacity-60;
  }

  &__content {
    @apply w-full;
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
