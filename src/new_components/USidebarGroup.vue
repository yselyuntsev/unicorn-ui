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
  @apply transition-all duration-700;

  &__activator {
    @apply -mt-1;
  }

  &__items {
    @apply -mb-1 px-2;
    @apply transition-all;

    .u-sidebar-item {
      &:hover {
        @apply bg-transparent;
      }

      &--active {
        &:hover {
          @apply bg-blue-50;
        }
      }
    }
  }

  &--show {
    @apply bg-gray-50;
  }

  &--show &__items {
    @apply pb-2;
  }
}
</style>
