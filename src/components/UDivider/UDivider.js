import "./UDivider.scss";

export default {
  name: "u-divider",

  props: {
    dense: { type: Boolean },
    simple: { type: Boolean },
  },

  computed: {
    classes() {
      return {
        "u-divider--dense": this.dense,
        "u-divider--simple": this.simple,
      };
    },
  },

  methods: {
    generateContent() {
      if (this.$slots.default) {
        return this.$createElement(
          "span",
          {
            staticClass: "u-divider__content",
          },
          this.$slots.default
        );
      }
    },
  },

  render(h) {
    return h(
      "div",
      {
        staticClass: "u-divider",
        class: this.classes,
      },
      [this.generateContent()]
    );
  },
};
