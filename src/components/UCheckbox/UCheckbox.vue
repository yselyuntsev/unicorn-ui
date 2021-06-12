<script>
// TODO: REFACTOR

import "./UCheckbox.scss";

export default {
  name: "UCheckbox",

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
  },

  computed: {
    isChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value);
      }

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

<template>
  <label class="u-checkbox" :class="[variant, { bordered, disabled }]">
    <input
      class="u-checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      :disabled="disabled"
    />

    <div class="u-checkbox__checkmark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <slot>
      {{ label }}
    </slot>
  </label>
</template>
