<template>
  <u-card>
    <u-card-title class="flex items-center justify-between">
      <u-icon filled :background="background" :color="color" :icon="icon" />
      <div class="flex items-center">
        <slot name="prepend"></slot>
      </div>
    </u-card-title>

    <slot></slot>
  </u-card>
</template>

<script>
import UCard from "@/components/UCard/UCard";
import UCardTitle from "@/components/UCard/UCardTitle";
import UIcon from "@/components/UIcon/UIcon";
export default {
  name: "AppWidget",
  components: { UIcon, UCardTitle, UCard },
  props: {
    background: String,
    color: String,
    icon: String,
  },
};
</script>
