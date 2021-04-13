import "./UApp.scss";

export default {
  name: "u-app",

  render(h) {
    const data = {
      staticClass: "u-app",
    };

    return h("div", data, this.$slots.default);
  },
};
