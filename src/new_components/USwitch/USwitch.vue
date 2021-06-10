<script>
import "./USwitch.scss";

export default {
  name: "u-switch",

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    icon: { type: String },
    value: { default: false },
    label: { type: String },
    trueValue: { default: true },
    falseValue: { default: false },
    variant: { type: String },
  },

  computed: {
    isChecked() {
      return this.value === this.trueValue;
    },
  },

  methods: {
    updateInput(event) {
      this.$emit(
        "change",
        event.target.checked ? this.trueValue : this.falseValue
      );
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
