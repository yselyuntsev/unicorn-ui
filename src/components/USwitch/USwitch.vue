<template>
  <label class="unicorn-switch" :class="isChecked ? 'checked' : 'unchecked'">
    <input
      class="unicorn-switch__checkbox"
      type="checkbox"
      :checked="isChecked"
      @change="updateInput"
    />

    <div class="unicorn-switch__switch">
      <u-icon class="unicorn-switch__icon" v-if="icon" :icon="icon" />
    </div>

    <!--    <span-->
    <!--      v-show="trueFalseLabels[0] || trueFalseLabels[1]"-->
    <!--      class="unicorn-switch__label"-->
    <!--    >-->
    <!--      {{ checked ? trueFalseLabels[1] : trueFalseLabels[0] }}-->
    <!--    </span>-->
  </label>
</template>

<script>
import UIcon from "@/components/UIcon/UIcon";
export default {
  name: "USwitch",
  components: { UIcon },
  model: {
    prop: "value",
    event: "change",
  },

  props: {
    icon: { type: String },
    value: { default: false },
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false },
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
  @apply cursor-pointer flex items-center;

  &__checkbox {
    @apply absolute invisible;
  }

  &__switch {
    @apply rounded-full inline-flex items-center w-16 h-8;
    @apply relative align-middle transition-all;
    @apply bg-gray-100;

    &:before {
      content: "";
      @apply inline-block absolute left-1;
      @apply w-6 h-6 bg-purple-600 rounded-full;
      @apply transition-all shadow;
    }
  }

  &__label {
    @apply ml-2 relative text-sm invisible;
  }

  &__icon {
    @apply z-10 absolute left-1 transition-all;
  }

  &.checked {
    .unicorn-switch__icon {
      @apply transform-gpu translate-x-8 visible;
    }

    .unicorn-switch__switch {
      @apply bg-purple-600;

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
