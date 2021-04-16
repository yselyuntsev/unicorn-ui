<template>
  <u-avatar :size="size">
    <slot></slot>
  </u-avatar>
</template>

<script>
import { UAvatar } from "../UAvatar";

export default {
  name: "u-list-item-avatar",

  components: { UAvatar },

  props: {
    size: {
      type: [Number, String],
      default: 40,
    },
  },
};
</script>
