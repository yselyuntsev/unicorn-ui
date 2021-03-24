<template>
  <div class="unicorn-text-field">
    <label class="unicorn-text-field__label">
      <p v-if="label" class="unicorn-text-field__label-text">{{ label }}</p>
      <input
        class="unicorn-text-field__field"
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
  name: "TextField",

  props: {
    disabled: { type: Boolean },
    label: { type: String },
    placeholder: { type: String },
    type: { type: String, default: "text" },
    value: { type: String },
  },

  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-text-field {
  @apply w-full;

  &__label {
    &-text {
      @apply text-xs font-medium text-gray-500 mb-1;
    }
  }

  &__field {
    @apply border rounded-md h-10 px-4 w-full text-gray-500;
    @apply outline-none transition-all;

    @include hover {
      &:hover {
        @apply bg-purple-50 border-purple-200;
      }
    }

    &:focus {
      @apply border-purple-300 bg-purple-100;
    }
  }
}
</style>
