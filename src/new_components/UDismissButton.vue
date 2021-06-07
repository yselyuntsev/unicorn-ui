<template>
  <div @click="handleClick" :class="classes">
    <div class="u-dismiss-button__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-dismiss-button",

  props: {
    invert: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-dismiss-button": true,
        "u-dismiss-button--invert": this.invert,
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
.u-dismiss-button {
  @apply h-12 w-12 inline-flex items-center justify-center;
  @apply absolute top-0 right-0 cursor-pointer;

  &:hover &__icon {
    @apply transform-gpu scale-110;
  }

  &:active &__icon {
    @apply transform-gpu scale-100;
  }

  &__icon {
    @apply w-5 h-5 inline-flex items-center justify-center;
    @apply bg-gray-800 bg-opacity-20 text-white rounded-full;
    @apply transition-all;
  }
}
</style>
