import "./UOverlay.scss";

import Toggleable from "@/mixins/toggleable";

export default {
  name: "u-overlay",

  mixins: [Toggleable],

  props: {
    value: {
      default: true,
    },
  },

  methods: {
    generateOverlay() {
      return this.$createElement("div", {
        staticClass: "u-overlay",
        on: {
          click: () => this.$emit("click"),
        },
      });
    },
  },

  render(h) {
    return h(
      "transition",
      {
        props: {
          appear: true,
          mode: "in-out",
          name: "fade",
        },
      },
      [this.value && this.generateOverlay()]
    );
  },
};
