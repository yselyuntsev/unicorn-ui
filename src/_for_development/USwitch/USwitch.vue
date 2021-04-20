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
      @apply w-6 h-6 bg-white rounded-full;
      @apply transition-all shadow;
    }
  }

  &__label {
    @apply ml-2 relative text-sm;
  }

  &__icon {
    @apply absolute left-2 transition-all;
  }

  &.primary {
    &.checked {
      .unicorn-switch__switch {
        @apply bg-purple-400 text-purple-400;
      }
    }
  }

  &.danger {
    &.checked {
      .unicorn-switch__switch {
        @apply bg-red-400 text-red-400;
      }
    }
  }

  &.success {
    &.checked {
      .unicorn-switch__switch {
        @apply bg-green-400 text-green-400;
      }
    }
  }

  &.warning {
    &.checked {
      .unicorn-switch__switch {
        @apply bg-yellow-400 text-yellow-400;
      }
    }
  }

  &.info {
    &.checked {
      .unicorn-switch__switch {
        @apply bg-blue-400 text-blue-400;
      }
    }
  }

  &.checked {
    .unicorn-switch__icon {
      @apply transform-gpu translate-x-8 visible;
    }

    .unicorn-switch__switch {
      @apply bg-gray-400;

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
