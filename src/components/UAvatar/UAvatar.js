import "./UAvatar.scss";
import { convertToUnit } from "../../utils/convertToUnit";

export default {
  name: "u-avatar",

  props: {
    left: Boolean,
    right: Boolean,
    size: {
      type: [Number, String],
      default: 48,
    },
  },

  computed: {
    classes() {
      const classes = {
        "u-avatar--left": this.left,
        "u-avatar--right": this.right,
      };

      return classes;
    },

    styles() {
      const styles = {
        height: convertToUnit(this.size),
        width: convertToUnit(this.size),
        minWidth: convertToUnit(this.size),
      };

      return styles;
    },
  },

  render(h) {
    const data = {
      staticClass: "u-avatar",
      class: this.classes,
      style: this.styles,
    };

    return h("div", data, this.$slots.default);
  },
};
