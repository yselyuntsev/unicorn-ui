<script>
import "./UListItem.scss";

export default {
  name: "UListItem",
};
</script>

<template>
  <li
    class="u-list-item"
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ clickable: $listeners.click }"
  >
    <slot></slot>
  </li>
</template>
