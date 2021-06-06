<template>
  <button @click="handleClick" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "u-btn",

  props: {
    variant: {
      type: String,
      validator: (value) =>
        ["primary", "success", "error", "warning", "info"].includes(value),
    },

    dense: Boolean,
    muted: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-btn": true,
        [`u-btn--${this.variant}`]: this.variant,
        "u-btn--dense": this.dense,
        "u-btn--muted": this.muted,
      };
    },
  },

  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.u-btn {
  @apply inline-flex items-center;
  @apply rounded-lg border border-gray-100 shadow-sm;
  @apply px-4 h-11 font-medium;

  @apply transition-all outline-none ring-gray-50;

  @apply focus:ring;

  &--primary {
    @apply bg-blue-500 text-white border-transparent ring-blue-300;
  }

  &--success {
    @apply bg-green-500 text-white border-transparent ring-green-300;
  }

  &--error {
    @apply bg-red-500 text-white border-transparent ring-red-300;
  }

  &--warning {
    @apply bg-yellow-500 text-white border-transparent ring-yellow-300;
  }

  &--info {
    @apply bg-purple-500 text-white border-transparent ring-purple-300;
  }

  &--dense {
    @apply h-8 px-3 text-sm;
  }

  &--muted {
    @apply shadow-none;
  }

  &--muted.u-btn--primary {
    @apply bg-blue-50 text-blue-500 ring-blue-100;
  }

  &--muted.u-btn--success {
    @apply bg-green-50 text-green-500 ring-green-100;
  }

  &--muted.u-btn--error {
    @apply bg-red-50 text-red-500 ring-red-100;
  }

  &--muted.u-btn--warning {
    @apply bg-yellow-50 text-yellow-500 ring-yellow-100;
  }

  &--muted.u-btn--info {
    @apply bg-purple-50 text-purple-500 ring-purple-100;
  }
}
</style>
