export default {
  name: "u-list-item-action",

  functional: true,

  render(h, { data, children = [] }) {
    data.staticClass = data.staticClass
      ? `u-list-item__action ${data.staticClass}`
      : "u-list-item__action";

    const filteredChild = children.filter((VNode) => {
      return VNode.isComment === false && VNode.text !== " ";
    });

    if (filteredChild.length > 1)
      data.staticClass += " u-list-item__action--stack";

    return h("div", data, children);
  },
};
