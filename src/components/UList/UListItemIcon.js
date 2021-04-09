export default {
  name: "u-list-item-icon",

  functional: true,

  render(h, { data, children }) {
    data.staticClass = `u-list-item__icon ${data.staticClass || ""}`.trim();

    return h("div", data, children);
  },
};
