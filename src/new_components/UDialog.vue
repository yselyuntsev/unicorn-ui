<script>
import UDismissButton from "./UDismissButton";

export default {
  name: "u-dialog",

  components: { UDismissButton },

  props: {
    width: Number,
    value: Boolean,
  },

  data() {
    return {
      show: false,

      //  transition controllers
      showContent: false,
    };
  },

  computed: {
    styles() {
      return {
        maxWidth: this.width + "px",
      };
    },
  },

  watch: {
    value: {
      handler(value) {
        value ? this.open() : this.closeContent();
      },
    },
  },

  methods: {
    open() {
      this.show = true;
      this.$root.$el.append(this.$refs.dialog);
    },

    openContent() {
      this.showContent = true;
    },

    closeContent() {
      this.showContent = false;
    },

    close() {
      this.show = false;
      this.$emit("input");
    },

    genListeners() {
      const listeners = {};
      listeners.click = () => this.open();
      return listeners;
    },
  },
};
</script>

<template>
  <div class="u-dialog">
    <slot name="activator" :on="genListeners()"></slot>

    <div ref="dialog">
      <transition c @enter="openContent" appear name="splash">
        <div
          v-if="show"
          @click.self.prevent="closeContent"
          class="u-dialog__body"
        >
          <transition @leave="close" name="dialog">
            <div v-if="showContent" :style="styles" class="u-dialog__content">
              <u-dismiss-button
                @click="closeContent"
                class="u-dialog__dismiss"
              />
              <slot></slot>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.u-dialog {
  &__body {
    @apply p-4 flex flex-col items-center justify-center;
    @apply fixed inset-0 bg-black bg-opacity-40 z-50;
  }

  &__content {
    @apply relative;
  }

  &__dismiss {
    @apply transform-gpu translate-x-full -translate-y-full;
  }
}

.splash-enter-active,
.splash-leave-active {
  @apply transition-all;
  will-change: transform;
}
.splash-enter,
.splash-leave-to {
  @apply opacity-0;
}

.dialog-enter-active,
.dialog-leave-active {
  @apply transition-all;
  will-change: transform;
}
.dialog-enter,
.dialog-leave-to {
  @apply opacity-0;
  @apply transform-gpu translate-y-1/2 scale-110;
}
</style>
