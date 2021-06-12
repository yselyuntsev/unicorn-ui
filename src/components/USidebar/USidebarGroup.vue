<script>
import "./USidebarGroup.scss";

export default {
  name: "u-sidebar-group",

  props: {
    manual: Boolean,
    active: Boolean,
  },

  data() {
    return {
      show: false,
      maxHeight: 0,
    };
  },

  computed: {
    expanded() {
      return !this.$slots.default.length
        ? false
        : this.manual
        ? this.active
        : this.show;
    },

    styles() {
      return {
        maxHeight: this.expanded ? this.maxHeight + "px" : 0,
      };
    },

    classes() {
      return {
        "u-sidebar-group": true,
        "u-sidebar-group--show": this.expanded,
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

      if (!this.manual) {
        listeners.click = () => this.toggle();
      }

      return listeners;
    },
  },
};
</script>

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
