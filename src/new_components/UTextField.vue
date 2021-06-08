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

<script>
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

<style lang="scss" scoped>
.u-text-field {
  @apply relative w-full;

  &:not(:first-of-type) {
    @apply mt-4;
  }

  &__label {
    @apply text-sm text-gray-400 pl-4 mb-1;
  }

  &__input {
    @apply border border-gray-100 text-base font-medium;
    @apply w-full px-4 h-11 rounded-lg outline-none;
    @apply transition-all leading-none pb-0.5;

    &::placeholder {
      @apply text-gray-400;
    }

    &:focus {
      @apply border border-blue-400 ring ring-blue-200;
    }
  }

  &__hint {
    @apply text-gray-400 mt-1 pl-4 text-xs;
  }

  &__prepend {
    @apply text-gray-400 leading-none;
    @apply absolute top-0 left-0 h-11 w-11;
    @apply inline-flex items-center justify-center;

    svg {
      @apply text-gray-300;
    }
  }

  &__append {
    @apply text-gray-400 leading-none;
    @apply absolute top-0 right-0 h-11 w-11;
    @apply inline-flex items-center justify-center;

    svg {
      @apply text-gray-300;
    }
  }

  &__label ~ &__prepend,
  &__label ~ &__append {
    @apply top-6;
  }

  &--with-prepend &__input {
    @apply pl-12;
  }
  &--with-append &__input {
    @apply pr-12;
  }

  &--with-prepend-dense &__input {
    @apply pl-9;
  }
  &--with-append-dense &__input {
    @apply pr-9;
  }

  // Dense
  &--dense &__input {
    @apply h-8;
  }

  &--dense &__prepend,
  &--dense &__append {
    @apply h-8 w-8;
  }

  // Success
  &--success &__input {
    @apply border-green-400;

    &:focus {
      @apply ring-green-200;
    }
  }

  &--success &__hint {
    @apply text-green-500;
  }

  &--success &__prepend,
  &--success &__append {
    @apply text-green-400;
  }

  //  Error
  &--error &__input {
    @apply border-red-400;

    &:focus {
      @apply ring-red-200;
    }
  }

  &--error &__hint {
    @apply text-red-500;
  }

  &--error &__prepend,
  &--error &__append {
    @apply text-red-400;
  }

  //  Warning
  &--warning &__input {
    @apply border-yellow-400;

    &:focus {
      @apply ring-yellow-200;
    }
  }

  &--warning &__hint {
    @apply text-yellow-500;
  }

  &--warning &__prepend,
  &--warning &__append {
    @apply text-yellow-400;
  }

  //  Info
  &--info &__input {
    @apply border-purple-400;

    &:focus {
      @apply ring-purple-200;
    }
  }

  &--info &__hint {
    @apply text-purple-500;
  }

  &--info &__prepend,
  &--info &__append {
    @apply text-purple-400;
  }
}
</style>
