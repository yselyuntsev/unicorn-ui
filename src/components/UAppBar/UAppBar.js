import "./UAppBar.scss";
import UToolbar from "@/components/UToolbar/UToolbar";

export default {
  name: "u-app-bar",

  props: {
    dense: Boolean,
    flat: Boolean,
  },

  render(h) {
    return h(
      UToolbar,
      {
        staticClass: "u-app-bar",
        props: {
          dense: this.dense,
          flat: this.flat,
        },
      },
      [this.$slots.default]
    );
  },
};
