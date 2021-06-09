<script>
import "./UAppMain.scss";

export default {
  name: "u-app-main",
};
</script>

<template>
  <div class="u-app-main">
    <slot name="prepend"></slot>

    <div class="u-app-main__container">
      <slot></slot>
    </div>

    <slot name="append"></slot>
  </div>
</template>
