<template>
  <u-card>
    <u-card-title>
      <u-icon filled :icon="icon" :background="background" :color="color" />
      <slot name="top"></slot>
    </u-card-title>

    <u-card-body>
      <slot></slot>
    </u-card-body>
  </u-card>
</template>

<script>
import UCard from "../UCard/UCard.vue";
import UCardTitle from "../UCard/UCardTitle.vue";
import UIcon from "../UIcon/UIcon.vue";

export default {
  components: { UCard, UCardTitle, UIcon },

  props: {
    icon: String,
    background: String,
    color: String,
  },
};
</script>
