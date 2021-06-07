<template>
  <div ref="group" :class="classes">
    <div class="u-sidebar-group__activator">
      <slot name="activator" :on="genListeners()"></slot>
    </div>

    <div :style="styles" class="u-sidebar-group__items">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "u-sidebar-group",

  props: {},

  data() {
    return {
      show: false,
      maxHeight: 0,
    };
  },

  computed: {
    styles() {
      return {
        maxHeight: this.show ? this.maxHeight + "px" : 0,
      };
    },

    classes() {
      return {
        "u-sidebar-group": true,
        "u-sidebar-group--show": this.show,
      };
    },
  },

  mounted() {
    this.calcMaxHeight();
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },

    calcMaxHeight() {
      this.maxHeight = this.$refs.group.scrollHeight;
    },

    genListeners() {
      const listeners = {};
      listeners.click = () => this.toggle();
      return listeners;
    },
  },
};
</script>

<style lang="scss" scoped>
.u-sidebar-group {
  @apply my-1 rounded-lg overflow-hidden;
  @apply transition-all;

  &__activator {
    @apply -mt-1;
  }

  &__items {
    @apply -mb-1 pl-8;
    @apply transition-all;
  }

  &--show {
    //@apply bg-gray-50;
    @apply pt-2;
  }

  &--show &__items {
    @apply pb-2;
  }
}
</style>
