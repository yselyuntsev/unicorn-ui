<template>
  <div class="unicorn-text-field" :class="{ focus }">
    <label class="unicorn-text-field__label">
      <p v-if="label" class="unicorn-text-field__label-text">{{ label }}</p>
      <input
        class="unicorn-text-field__field"
        ref="input"
        :type="type"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="updateValue"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "UTextField",

  props: {
    disabled: { type: Boolean },
    label: { type: String },
    placeholder: { type: String },
    type: { type: String, default: "text" },
    value: { type: String },
  },

  data() {
    return {
      focus: false,
    };
  },

  methods: {
    updateValue(e) {
      if (e.target.value.trim()) {
        this.focus = true;
      } else {
        this.focus = false;
      }

      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-text-field {
  @apply w-full bg-gray-100 h-16 flex items-center relative rounded-lg;
  @apply transition-all;

  &__label {
    @apply w-full;

    &-text {
      @apply absolute right-4 left-4 top-6;
      @apply text-xs font-medium text-gray-500;
      @apply transition-all;
    }
  }

  &__field {
    @apply bg-transparent h-10 mt-4 px-4 w-full text-gray-500;
    @apply outline-none transition-all;

    //@include hover {
    //  &:hover {
    //    @apply bg-purple-50;
    //  }
    //}
  }

  &:focus-within {
    @apply ring ring-purple-500 bg-white;
  }

  &:focus-within,
  &.focus {
    .unicorn-text-field__label-text {
      @apply transform-gpu -translate-y-4;
    }
  }
}
</style>
