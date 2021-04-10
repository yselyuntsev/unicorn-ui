import "./UToolbar.scss";
import { getSlot } from "@/utils/getSlot";

export default {
  props: {
    dense: Boolean,
    flat: Boolean,
    outlined: Boolean,
    floating: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-toolbar--dense": this.dense,
        "u-toolbar--flat": this.flat,
        "u-toolbar--outlined": this.outlined,
        "u-toolbar--floating": this.floating,
      };
    },
  },

  methods: {
    generateContent() {
      return this.$createElement(
        "div",
        {
          staticClass: "u-toolbar__content",
        },
        getSlot(this)
      );
    },
  },

  render(h) {
    const children = [this.generateContent()];
    const data = {
      staticClass: "u-toolbar",
      class: this.classes,
      on: this.$listeners,
    };

    return h("div", data, children);
  },
};
