<template>
  <label class="unicorn-switch" :class="[isChecked ? 'checked' : '', variant]">
    <input
      class="unicorn-switch__checkbox"
      type="checkbox"
      :value="value"
      :checked="isChecked"
      @change="updateInput"
    />

    <div class="unicorn-switch__switch">
      <u-icon
        small
        class="unicorn-switch__icon"
        :icon="isChecked ? icon : ''"
      />
    </div>

    <span class="unicorn-switch__label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script>
import UIcon from "@/components/UIcon/UIcon";
export default {
  name: "USwitch",
  components: { UIcon },
  model: {
    prop: "modelValue",
    event: "change",
  },

  props: {
    icon: { type: String },
    value: { default: false },
    modelValue: { default: "" },
    label: { type: String },
    trueValue: { default: true },
    falseValue: { default: false },
    variant: { type: String },
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
.unicorn-switch {
  @apply cursor-pointer inline-flex items-center;

  &__checkbox {
    @apply absolute invisible;
  }

  &__switch {
    @apply rounded-full inline-flex items-center w-16 h-8;
    @apply relative align-middle transition-all;
    @apply bg-gray-100 text-gray-500;

    &:before {
      content: "";
      @apply inline-block absolute left-1;
      @apply w-6 h-6 bg-gray-500 rounded-full;
      @apply transition-all shadow;
    }
  }

  &__label {
    @apply ml-2 relative text-sm;
  }

  &__icon {
    @apply z-10 absolute left-1 transition-all;
  }

  &.primary {
    .unicorn-switch__switch {
      @apply bg-purple-100;
      &:before {
        @apply bg-purple-500;
      }
    }

    &.checked {
      .unicorn-switch__switch {
        @apply bg-purple-500 text-purple-500;
      }
    }
  }

  &.secondary {
    .unicorn-switch__switch {
      @apply bg-gray-100;
      &:before {
        @apply bg-gray-700;
      }
    }

    &.checked {
      .unicorn-switch__switch {
        @apply bg-gray-700 text-gray-700;
      }
    }
  }

  &.danger {
    .unicorn-switch__switch {
      @apply bg-red-100;
      &:before {
        @apply bg-red-500;
      }
    }

    &.checked {
      .unicorn-switch__switch {
        @apply bg-red-500 text-red-500;
      }
    }
  }

  &.success {
    .unicorn-switch__switch {
      @apply bg-green-100;
      &:before {
        @apply bg-green-500;
      }
    }

    &.checked {
      .unicorn-switch__switch {
        @apply bg-green-500 text-green-500;
      }
    }
  }

  &.warning {
    .unicorn-switch__switch {
      @apply bg-yellow-100;
      &:before {
        @apply bg-yellow-500;
      }
    }

    &.checked {
      .unicorn-switch__switch {
        @apply bg-yellow-500 text-yellow-500;
      }
    }
  }

  &.info {
    .unicorn-switch__switch {
      @apply bg-blue-100;
      &:before {
        @apply bg-blue-500;
      }
    }

    &.checked {
      .unicorn-switch__switch {
        @apply bg-blue-500 text-blue-500;
      }
    }
  }

  &.checked {
    .unicorn-switch__icon {
      @apply transform-gpu translate-x-8 visible;
    }

    .unicorn-switch__switch {
      @apply bg-gray-500;

      &:before {
        @apply transform-gpu translate-x-8 bg-white;
      }
    }
  }
}
/*.toggle-switch:before {*/
/*  content: "";*/
/*  display: block;*/
/*  background: linear-gradient(to bottom, #fff 0%, #eee 100%);*/
/*  border-radius: 50%;*/
/*  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);*/
/*  width: 21px;*/
/*  height: 21px;*/
/*  position: absolute;*/
/*  top: 2px;*/
/*  left: 2px;*/
/*  transition: left 0.25s;*/
/*}*/
</style>
