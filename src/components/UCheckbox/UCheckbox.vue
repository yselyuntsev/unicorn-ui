<template>
  <label class="unicorn-checkbox">
    <input
      class="unicorn-checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />

    <span class="unicorn-checkbox__checkmark"></span>

    <slot>
      {{ label }}
    </slot>
  </label>
</template>

<script>
export default {
  model: {
    prop: "modelValue",
    event: "change",
  },

  props: {
    value: { type: String },
    modelValue: { default: "" },
    label: { type: String, required: true },
    trueValue: { default: true },
    falseValue: { default: false },
  },

  computed: {
    isChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },

  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;

      if (Array.isArray(this.modelValue)) {
        let newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-checkbox {
  @apply flex items-center relative pl-10 cursor-pointer;
  @apply text-gray-700 transition-all;

  @include hover {
    &:hover {
      @apply text-purple-500;
    }
  }

  &__input {
    @apply absolute opacity-0 h-0 w-0;
  }

  &__checkmark {
    min-width: 1.5rem;
    max-width: 1.5rem;
    min-height: 1.5rem;
    max-height: 1.5rem;
    @apply border-2 mr-4 rounded-md;
    @apply transition-all relative;

    &:after {
      content: "";
      border-width: 0 3px 3px 0;

      @apply invisible absolute left-1.5 top-0;
      @apply w-0 h-0 border-white;
      @apply transform-gpu rotate-45;
      @apply transition-all;
    }
  }

  &:hover input ~ .unicorn-checkbox__checkmark {
    @apply bg-gray-100;
  }

  & input:checked ~ .unicorn-checkbox__checkmark {
    @apply border-purple-500 bg-purple-500;
  }

  & input:checked ~ .unicorn-checkbox__checkmark:after {
    @apply visible w-2 h-4;
  }
}
</style>
