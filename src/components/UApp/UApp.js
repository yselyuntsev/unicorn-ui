import "./UApp.scss";

export default {
  name: "u-app",

  render(h) {
    return h(
      "div",
      {
        staticClass: "u-app",
      },
      this.$slots.default
    );
  },
};
