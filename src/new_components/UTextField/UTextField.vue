<script>
import "./UTextField.scss";

export default {
  name: "u-text-field",

  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "text",
    },
    variant: {
      type: String,
      validator: (value) =>
        ["success", "error", "warning", "info"].includes(value),
    },
    dense: Boolean,
    readonly: Boolean,
    label: String,
    placeholder: String,
    hint: String,
    disableHint: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-text-field": true,
        [`u-text-field--${this.variant}`]: this.variant,
        "u-text-field--dense": this.dense,
        "u-text-field--with-prepend":
          (this.$slots.prepend || this.$scopedSlots.prepend) && !this.dense,
        "u-text-field--with-append":
          (this.$slots.append || this.$scopedSlots.append) && !this.dense,
        "u-text-field--with-prepend-dense":
          (this.$slots.prepend || this.$scopedSlots.prepend) && this.dense,
        "u-text-field--with-append-dense":
          (this.$slots.append || this.$scopedSlots.append) && this.dense,
      };
    },
  },

  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },

    handleClickPrepend(event) {
      this.$emit("click:prepend", event);
    },

    handleClickAppend(event) {
      this.$emit("click:append", event);
    },
  },
};
</script>

<template>
  <label :class="classes">
    <p v-if="label" class="u-text-field__label">{{ label }}</p>
    <input
      @input="handleInput"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      class="u-text-field__input"
    />
    <p v-if="!disableHint" class="u-text-field__hint">{{ hint }}</p>

    <span
      v-if="$slots.prepend || $scopedSlots.prepend"
      @click="handleClickPrepend"
      class="u-text-field__prepend"
    >
      <slot name="prepend"></slot>
    </span>

    <span
      v-if="$slots.append || $scopedSlots.append"
      @click="handleClickAppend"
      class="u-text-field__append"
    >
      <slot name="append"></slot>
    </span>
  </label>
</template>
