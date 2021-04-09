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

  render(h) {
    return h(
      "div",
      {
        staticClass: "u-list-item",
        class: this.classes,
      },
      this.$slots.default
    );
  },
};
