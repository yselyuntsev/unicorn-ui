<script>
import "./UCollapse.scss";

export default {
  name: "u-collapse",

  data() {
    return {
      expanded: false,
    };
  },

  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<template>
  <div class="u-collapse" :class="{ expanded }">
    <div class="u-collapse__header" @click="toggle">
      <slot name="header"></slot>
    </div>

    <div v-if="expanded" ref="body" class="u-collapse__body">
      <slot></slot>
    </div>
  </div>
</template>
