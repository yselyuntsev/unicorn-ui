import { convertToUnit } from "../../utils/convertToUnit";
import { getSlot } from "../../utils/getSlot";

import Toggleable from "../../mixins/toggleable";

export default {
  name: "u-app-sidebar",

  mixins: [Toggleable],

  props: {
    compact: Boolean,
    value: { default: true },
    temporary: Boolean,
    width: {
      type: [Number, String],
      default: 256,
    },
  },

  // data() {
  //   return {
  //     isActive: !!this.value,
  //   };
  // },

  computed: {
    classes() {
      return {
        "u-app-sidebar": true,
        "u-app-sidebar--is-mobile": this.isMobile,
        "u-app-sidebar--compact": this.compact,
        "u-app-sidebar--open": this.isActive,
        "u-app-sidebar--temporary": this.temporary,
      };
    },

    computedWidth() {
      return this.compact ? "56" : this.width;
    },

    showOverlay() {
      return this.isActive && this.temporary;
    },

    computedTransform() {
      return this.isActive ? 0 : -100;
    },

    styles() {
      return {
        transform:
          this.temporary &&
          `translateX(${convertToUnit(this.computedTransform, "%")})`,
        width: convertToUnit(this.computedWidth),
      };
    },
  },

  watch: {
    // showOverlay(val) {
    //   if (val) this.generateOverlay();
    //   else this.removeOverlay();
    // },
  },

  methods: {
    genContent() {
      return this.$createElement(
        "div",
        {
          staticClass: "u-app-sidebar__content",
        },
        this.$slots.default
      );
    },

    genPosition(name) {
      const slot = getSlot(this, name);

      if (!slot) return slot;

      return this.$createElement(
        "div",
        {
          staticClass: `u-app-sidebar__${name}`,
        },
        slot
      );
    },

    genPrepend() {
      return this.genPosition("prepend");
    },

    genAppend() {
      return this.genPosition("append");
    },
  },

  render(h) {
    const children = [this.genPrepend(), this.genContent(), this.genAppend()];

    console.log(this);

    return h(
      "aside",
      {
        class: this.classes,
        style: this.styles,
      },
      children
    );
  },
};
