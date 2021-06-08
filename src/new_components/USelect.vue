<template>
  <div v-click-outside="close" class="u-select">
    <label class="u-select-field">
      <p v-if="label" class="u-select-field__label">{{ label }}</p>
      <input
        @click="open"
        @focus="open"
        :value="genSelectedItems()"
        type="text"
        readonly
        class="u-select-field__input"
      />
      <p v-if="!disableHint" class="u-select__hint">{{ hint }}</p>
    </label>

    <transition name="slide-t">
      <div ref="items" v-if="show" class="u-select__items">
        <div
          v-for="(item, index) in items"
          @click="selectItem(item)"
          :key="index"
          :class="itemClasses(item)"
        >
          <span v-if="multiple" class="u-select__item-checkbox" />

          {{ genItemText(item) }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from "../directives/click-outside";

export default {
  name: "u-select",

  directives: {
    ClickOutside,
  },

  props: {
    value: [String, Object, Array],
    label: String,
    multiple: Boolean,
    hint: String,
    items: Array,
    disableHint: Boolean,
    itemText: {
      type: [String, Array, Function],
      default: "text",
    },
    itemValue: {
      type: [String, Array, Function],
      default: "value",
    },
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    open() {
      this.show = true;
    },

    close() {
      this.show = false;
    },

    // TODO: SIMPLIFY ALL CALCULATION METHODS

    selectItem(item) {
      if (this.multiple) {
        const value = this.genEmittedValue(item);

        if (this.value.includes(value)) {
          const newValue = this.value.filter(
            (item) => JSON.stringify(item) !== JSON.stringify(value)
          );
          this.$emit("input", newValue);
        } else {
          this.$emit("input", [...this.value, value]);
        }
      } else {
        this.$emit("input", this.genEmittedValue(item));
        this.close();
      }
    },

    itemClasses(item) {
      const values = this.multiple ? this.value : [this.value];

      return {
        "u-select__item": true,
        "u-select__item--selected": values.includes(this.genEmittedValue(item)),
      };
    },

    genSelectedItems() {
      const selected = this.items.filter((item) => {
        const values = this.multiple ? this.value : [this.value];
        return values.includes(this.genEmittedValue(item));
      });

      const value = selected.map(this.genItemText);
      return value.join(", ");
    },

    genItemText(item) {
      if (typeof this.itemText === "string") {
        return item[this.itemText];
      }

      if (Array.isArray(this.itemText)) {
        let text = "";
        this.itemText.forEach((token) => {
          text += item[token] + " ";
        });
        return text.trim();
      }

      if (typeof this.itemText === "function") {
        return this.itemText(item);
      }
    },

    genEmittedValue(item) {
      if (typeof this.itemValue === "string") {
        return item[this.itemValue];
      }

      if (Array.isArray(this.itemValue)) {
        let text = "";
        this.itemValue.forEach((token) => {
          text += item[token] + " ";
        });
        return text.trim();
      }

      if (typeof this.itemValue === "function") {
        return this.itemValue(item);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.u-select {
  @apply relative w-full;

  &:not(:first-of-type) {
    @apply mt-4;
  }

  &__items {
    @apply py-1 px-2 bg-white top-full mt-2 flex flex-col rounded-lg shadow-card;
    @apply absolute min-w-full z-10 max-h-64 overflow-y-auto;

    &::-webkit-scrollbar {
      @apply w-3;
    }

    &::-webkit-scrollbar-track {
      @apply border-2 border-white;
    }

    &::-webkit-scrollbar-thumb {
      @apply rounded-full bg-gray-200;
      border: 4px solid #ffffff;
    }
  }

  &__item {
    min-height: 2.75rem;
    @apply flex my-1 items-center h-11 px-2 truncate rounded-lg cursor-pointer;
    @apply text-sm font-medium transition-all;

    &:hover {
      @apply bg-gray-50;
    }

    &--selected,
    &--selected:hover {
      @apply bg-blue-50 text-blue-500;
    }
    &--selected &-checkbox {
      @apply border-blue-500 bg-blue-500;

      &:after {
        content: "";
        @apply w-5 h-5;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /> </svg>');
      }
    }
  }

  &__item-checkbox {
    @apply inline-flex w-5 h-5 mr-4 border-2 border-gray-300 rounded;
  }
}

.u-select-field {
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
}

.slide-t-enter-active,
.slide-t-leave-active {
  @apply transition-all;
}
.slide-t-enter,
.slide-t-leave-to {
  @apply opacity-0;
  @apply transform-gpu -translate-y-2;
}
</style>
