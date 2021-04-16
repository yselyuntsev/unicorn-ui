<template>
  <div class="u-list-item" @click="click" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "u-list-item",

  inheritAttrs: false,

  props: {
    active: Boolean,
    disabled: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-list-item--active": this.active,
        "u-list-item--disabled": this.disabled,
      };
    },
  },

  methods: {
    click(e) {
      if (e.detail) this.$el.blur();
      this.$emit("click", e);
    },
  },
};
</script>
