<template>
<u-card outlined flat style="margin-top: 2rem; margin-bottom: 1rem">
  <u-card-body class="demo-body" :class="{
    'demo-body--vertical': this.vertical,
    'demo-body--stretch': this.stretch
  }">
    <slot></slot>
  </u-card-body>
</u-card>
</template>

<script>
export default {
  name: "DocsDemo",

  props: {
    vertical: Boolean,
    stretch: Boolean
  },
};
</script>

<style scoped>
.demo-body {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.demo-body--vertical {
  flex-direction: column;
  align-items: start;
}

.demo-body--stretch {
  align-items: stretch;
}
</style>