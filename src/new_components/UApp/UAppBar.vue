<script>
import "./UAppBar.scss";

export default {
  name: "u-app-bar",
};
</script>

<template>
  <div class="u-app-bar">
    <div v-if="$slots.left || $scopedSlots.left" class="u-app-bar__left">
      <slot name="left"></slot>
    </div>

    <div class="u-app-bar__body">
      <slot></slot>
    </div>

    <div v-if="$slots.right || $scopedSlots.right" class="u-app-bar__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
