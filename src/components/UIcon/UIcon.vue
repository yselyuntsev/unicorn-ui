<template>
  <span v-if="!filled" class="u-icon mdi" :class="classes"></span>

  <div v-else class="u-icon" :class="filledClasses">
    <span class="u-icon mdi" :class="icon"></span>
  </div>
</template>

<script>
import "./UIcon.scss";

export default {
  name: "u-icon",

  props: {
    filled: Boolean,
    icon: String,
    background: { type: String, default: "bg-gray-100" },
    color: { type: String, default: "text-gray-700" },
    left: Boolean,
    small: Boolean,
    right: Boolean,
  },

  computed: {
    classes() {
      return {
        [this.icon]: true,
        "u-icon--left": this.left,
        "u-icon--right": this.right,
        "u-icon--small": this.small,
      };
    },

    filledClasses() {
      return {
        "u-icon--filled": true,
        [this.background]: true,
        [this.color]: true,
        "u-icon--small": this.small,
      };
    },
  },
};
</script>
