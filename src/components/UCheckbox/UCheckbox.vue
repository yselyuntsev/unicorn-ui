<template>
  <label class="unicorn-checkbox" :class="[variant, { bordered, disabled }]">
    <input
      class="unicorn-checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="disabled"
    />

    <span class="unicorn-checkbox__checkmark">
      <u-icon small :icon="isChecked ? icon : ''" />
    </span>

    <slot>
      {{ label }}
    </slot>
  </label>
</template>

<script>
import UIcon from "@/components/UIcon/UIcon";
export default {
  name: "UCheckbox",
  components: { UIcon },
  model: {
    prop: "modelValue",
    event: "change",
  },

  props: {
    value: { type: [String, Number] },
    modelValue: { default: "" },
    label: { type: String },
    trueValue: { default: true },
    falseValue: { default: false },
    variant: { type: String },
    bordered: { type: Boolean },
    disabled: { type: Boolean },
    icon: { type: String, default: "mdi-check" },
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
  @apply inline-flex items-center relative cursor-pointer;
  @apply text-gray-700 transition-all text-sm leading-tight;

  &__input {
    @apply absolute opacity-0 h-0 w-0;
  }

  &:active {
    .unicorn-checkbox__checkmark {
      @apply transform-gpu scale-90;
    }
  }

  &__checkmark {
    min-width: 1.5rem;
    max-width: 1.5rem;
    min-height: 1.5rem;
    max-height: 1.5rem;
    @apply border-2 mr-4 rounded-md;
    @apply flex items-center justify-center;
    @apply transition-all relative text-white;

    //&:after {
    //  content: "";
    //  border-width: 0 3px 3px 0;
    //
    //  @apply invisible absolute left-1.5 top-0;
    //  @apply w-0 h-0 border-white;
    //  @apply transform-gpu rotate-45;
    //  @apply transition-all;
    //}
  }

  @include hover {
    &:hover input ~ .unicorn-checkbox__checkmark {
      @apply bg-gray-100;
    }
  }

  & input:checked ~ .unicorn-checkbox__checkmark {
    @apply border-gray-400 bg-gray-400;
  }

  & input:checked ~ .unicorn-checkbox__checkmark:after {
    @apply visible w-2 h-4;
  }

  &.bordered {
    @apply p-2 rounded-md bg-white border border-gray-100;
  }

  // Variants
  &.primary {
    @include hover {
      &:hover {
        @apply text-purple-400;
      }

      &:hover input ~ .unicorn-checkbox__checkmark {
        @apply bg-purple-100 border-purple-200;
      }
    }

    & input:checked ~ .unicorn-checkbox__checkmark {
      @apply border-purple-400 bg-purple-400;
    }
  }

  &.secondary {
    @include hover {
      &:hover {
        @apply text-gray-900;
      }
    }

    & input:checked ~ .unicorn-checkbox__checkmark {
      @apply border-gray-700 bg-gray-700;
    }
  }

  &.danger {
    @include hover {
      &:hover {
        @apply text-red-400;
      }

      &:hover input ~ .unicorn-checkbox__checkmark {
        @apply bg-red-100 border-red-200;
      }
    }

    & input:checked ~ .unicorn-checkbox__checkmark {
      @apply border-red-400 bg-red-400;
    }
  }

  &.success {
    @include hover {
      &:hover {
        @apply text-green-400;
      }

      &:hover input ~ .unicorn-checkbox__checkmark {
        @apply bg-green-100 border-green-200;
      }
    }

    & input:checked ~ .unicorn-checkbox__checkmark {
      @apply border-green-400 bg-green-400;
    }
  }

  &.warning {
    @include hover {
      &:hover {
        @apply text-yellow-400;
      }

      &:hover input ~ .unicorn-checkbox__checkmark {
        @apply bg-yellow-100 border-yellow-200;
      }
    }

    & input:checked ~ .unicorn-checkbox__checkmark {
      @apply border-yellow-400 bg-yellow-400;
    }
  }

  &.info {
    @include hover {
      &:hover {
        @apply text-blue-400;
      }

      &:hover input ~ .unicorn-checkbox__checkmark {
        @apply bg-blue-100 border-blue-200;
      }
    }

    & input:checked ~ .unicorn-checkbox__checkmark {
      @apply border-blue-400 bg-blue-400;
    }
  }

  &.disabled {
    @apply opacity-80 cursor-not-allowed;
  }
}
</style>
