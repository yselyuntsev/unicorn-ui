<script>
import "./UDivider.scss";

export default {
  name: "u-divider",

  props: {
    flat: Boolean,
    title: String,
    dense: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-divider": true,
        "u-divider--dense": this.dense,
      };
    },
  },
};
</script>

<template>
  <div :class="classes">
    <div
      v-if="$slots.default || $scopedSlots.default || title"
      class="u-divider__title"
    >
      <slot>
        {{ title }}
      </slot>
    </div>
  </div>
</template>
