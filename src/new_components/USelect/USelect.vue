<script>
import "./USelect.scss";

import ClickOutside from "../../directives/click-outside";

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
      <p v-if="!disableHint" class="u-select-field__hint">{{ hint }}</p>
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
