import "./UGrid.scss";

export default {
  name: "u-row",
  functional: true,

  props: {
    noGutters: Boolean,
    dense: Boolean,
  },

  render(h, { props, children, data }) {
    const classes = {
      "u-row": true,
      "u-row--dense": props.dense,
      "u-row--noGutters": props.noGutters,
    };
    return h("div", { ...data, class: classes }, children);
  },
};
