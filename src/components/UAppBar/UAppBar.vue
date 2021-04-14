<template>
  <u-toolbar class="u-app-bar" :dense="dense" :flat="flat">
    <slot></slot>
  </u-toolbar>
</template>

<script>
import "./UAppBar.scss";
import { UToolbar } from "../UToolbar";

export default {
  name: "u-app-bar",
  components: { UToolbar },

  props: {
    dense: Boolean,
    flat: Boolean,
  },
};
</script>
