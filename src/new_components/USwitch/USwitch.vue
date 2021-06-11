<script>
import "./USwitch.scss";

export default {
  name: "u-switch",

  model: {
    prop: "modelValue",
    event: "change",
  },

  props: {
    icon: { type: String },
    value: { default: false },
    modelValue: { default: undefined },
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
  <label
    class="u-switch"
    :class="[isChecked ? 'checked' : '', variant]"
    tabindex="0"
  >
    <input
      class="u-switch__checkbox"
      type="checkbox"
      :value="value"
      :checked="isChecked"
      @change="updateInput"
    />

    <div class="u-switch__switch" />

    <span class="u-switch__label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
