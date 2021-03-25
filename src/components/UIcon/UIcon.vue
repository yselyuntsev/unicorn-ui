<template>
  <div
    v-if="filled"
    class="unicorn-icon unicorn-icon--filled"
    :class="[background, color]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="mdi" :class="icon" />
  </div>

  <span v-else class="unicorn-icon mdi" :class="[icon, { left, right }]" />
</template>

<script>
export default {
  name: "UIcon",

  props: {
    filled: { type: Boolean },
    icon: { type: String },
    background: { type: String },
    color: { type: String },
    left: { type: Boolean },
    right: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
.unicorn-icon {
  @apply text-2xl;

  &--filled {
    min-width: 2.5rem;
    min-height: 2.5rem;
    @apply rounded-md bg-gray-200 text-gray-700;
  }

  &.left {
    @apply -ml-2 mr-2;
  }

  &.right {
    @apply -mr-2 ml-2;
  }
}
</style>
