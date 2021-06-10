<script>
import "./UGroupHeader.scss";

export default {
  name: "u-group-header",
};
</script>

<template>
  <div class="u-group-header">
    <div class="u-group-header__title">
      <span class="truncate">
        <slot></slot>
      </span>
    </div>

    <div class="u-group-header__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
