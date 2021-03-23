<template>
  <div
    v-if="filled"
    class="unicorn-icon unicorn-icon--filled"
    :class="[background, color]"
  >
    <span class="mdi" :class="icon" />
  </div>

  <span v-else class="unicorn-icon mdi" :class="icon" />
</template>

<script>
export default {
  name: "Icon",

  props: {
    filled: { type: Boolean },
    icon: { type: String },
    background: { type: String },
    color: { type: String },
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
}
</style>
