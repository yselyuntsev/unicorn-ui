import "./UBadge.scss";

export default {
  name: "u-badge",

  props: {
    animated: Boolean,
    bordered: Boolean,
    left: Boolean,
    bottom: Boolean,
    variant: {
      type: String,
      default: "primary",
      validator: (val) =>
        ["primary", "success", "error", "warning", "info"].includes(val),
    },
    value: { default: true },
  },

  computed: {
    classes() {
      const classes = {
        "u-badge--bordered": this.bordered,
        "u-badge--bottom": this.bottom,
        "u-badge--left": this.left,
      };

      classes[`u-badge--${this.variant}`] = true;

      return classes;
    },
  },

  methods: {
    generateIndicator() {
      if (this.animated) {
        return this.$createElement("div", {
          staticClass: "u-badge__indicator",
        });
      }
    },
  },

  render(h) {
    return h("div", { staticClass: "u-badge", class: this.classes }, [
      this.generateIndicator(),
      this.$slots.default,
    ]);
  },
};
