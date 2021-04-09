<template>
  <u-card>
    <u-card-title class="flex justify-between">
      <u-icon filled :icon="icon" :background="background" :color="color" />
      <slot name="top"></slot>
    </u-card-title>

    <slot></slot>
  </u-card>
</template>

<script>
import UCard from "../../components/UCard/UCard.js";
import UCardTitle from "../UCard/UCardTitle.vue";
import UIcon from "../UIcon/UIcon.vue";

export default {
  name: "UWidget",

  components: { UCard, UCardTitle, UIcon },

  props: {
    icon: String,
    background: String,
    color: String,
  },
};
</script>
