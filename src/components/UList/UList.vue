<script>
import "./UList.scss";

export default {
  name: "UList",
  props: {
    bordered: { type: Boolean },
  },
};
</script>

<template>
  <ul class="u-list" :class="{ bordered }">
    <slot></slot>
  </ul>
</template>
