import "./UAppSidebar.scss";

import { convertToUnit } from "../../utils/convertToUnit";
import { getSlot } from "../../utils/getSlot";

import Overlayable from "../../mixins/overlayable";

import Toggleable from "@/mixins/toggleable";
import Adaptable from "@/mixins/adaptable";

export default {
  name: "u-app-sidebar",

  mixins: [Toggleable, Overlayable, Adaptable],

  props: {
    compact: Boolean,
    value: { default: true },
    temporary: Boolean,
    flat: Boolean,
    adaptive: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [Number, String],
      default: 256,
    },
  },

  computed: {
    classes() {
      return {
        "u-app-sidebar": true,
        "u-app-sidebar--is-mobile": this.isMobile,
        "u-app-sidebar--compact": this.compact,
        "u-app-sidebar--open": this.isActive,
        "u-app-sidebar--temporary": this.temporary,
        "u-app-sidebar--flat": this.flat,
      };
    },

    computedWidth() {
      return this.compact && this.isActive
        ? "72"
        : this.isActive && !this.temporary
        ? this.width
        : this.isActive && this.temporary
        ? this.width
        : 0;
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
        minWidth: convertToUnit(this.computedWidth),
      };
    },

    showOverlay() {
      return this.isActive && this.temporary;
    },
  },

  watch: {
    showOverlay: {
      handler(val) {
        this.$nextTick(() => {
          if (val) this.generateOverlay();
          else this.removeOverlay();
        });
      },
      immediate: true,
    },

    $lg() {
      if (this.adaptive) {
        this.isActive = !this.$lg && !this.temporary;
      }
    },
  },

  methods: {
    genContent() {
      if (this.$sm) return;
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
