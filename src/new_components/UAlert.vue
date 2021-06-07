<template>
  <div :class="classes">
    <div v-if="variant" class="u-alert__icon">
      <svg
        v-if="variant === 'success'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-if="variant === 'error'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-if="variant === 'warning'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-if="variant === 'info'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <div class="u-alert__title">Alert default title</div>

    <slot></slot>

    <u-dismiss-button v-if="dismissible" @click="handleClose" />
  </div>
</template>

<script>
import UDismissButton from "./UDismissButton";

export default {
  name: "u-alert",

  components: { UDismissButton },

  props: {
    dismissible: Boolean,
    variant: {
      type: String,
      validator: (value) =>
        ["success", "error", "warning", "info"].includes(value),
    },
  },

  computed: {
    classes() {
      return {
        "u-alert": true,
        "u-alert--with-icon": this.variant,
        [`u-alert--${this.variant}`]: this.variant,
        "u-alert--dismissible": this.dismissible,
      };
    },
  },

  methods: {
    handleClose(event) {
      this.$emit("click:close", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.u-alert {
  @apply bg-gray-50 rounded-lg p-4 relative;

  &__icon {
    @apply absolute left-4 top-4;
  }

  &__title {
    @apply text-lg font-bold mb-2;
  }

  &--with-icon {
    @apply pl-14;
  }

  &--dismissible {
    @apply pr-14;
  }

  &--success {
    @apply bg-green-100 text-green-700;
  }

  &--error {
    @apply bg-red-100 text-red-700;
  }

  &--warning {
    @apply bg-yellow-100 text-yellow-700;
  }

  &--info {
    @apply bg-purple-100 text-purple-700;
  }
}
</style>
