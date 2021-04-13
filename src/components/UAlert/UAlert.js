import "./UAlert.scss";

import UIcon from "../UIcon";
import { UBtn } from "../UBtn";

export default {
  name: "u-alert",

  components: { UIcon, UBtn },

  props: {
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: "mdi-close",
    },
    icon: {
      default: "",
      type: [Boolean, String],
      validator: (val) => typeof val === "string" || val === false,
    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    variant: {
      type: String,
      validator: (val) =>
        ["primary", "error", "success", "warning", "info"].includes(val),
    },
    value: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      let classes = {
        "u-alert--dense": this.dense,
        "u-alert--outlined": this.outlined,
        "u-alert--prominent": this.prominent,
        "u-alert--text": this.text,
        "u-alert--dismissible": this.dismissible,
      };

      if (this.variant) {
        classes[`u-alert--${this.variant}`] = true;
      }

      return classes;
    },
  },

  methods: {
    genContent() {
      return this.$createElement(
        "div",
        {
          staticClass: "u-alert__content",
        },
        this.$slots.default
      );
    },

    genIcon() {
      if (this.icon) {
        return this.$createElement(UIcon, {
          staticClass: "u-alert__icon",
          props: { icon: this.icon },
        });
      }
    },

    genDismissible() {
      if (this.dismissible) {
        const closeIcon = this.$createElement(UIcon, {
          props: {
            icon: this.closeIcon,
          },
        });

        return this.$createElement(
          UBtn,
          {
            staticClass: "u-alert__close",
            props: {
              icon: true,
              variant: this.variant,
              text: this.text || this.outlined,
            },
          },
          [closeIcon]
        );
      }
    },

    genWrapper() {
      const children = [
        this.genIcon(),
        this.genContent(),
        this.genDismissible(),
      ];
      const data = { staticClass: "u-alert__wrapper" };
      return this.$createElement("div", data, children);
    },
  },

  render(h) {
    const data = {
      staticClass: "u-alert",
      class: this.classes,
    };

    return h("div", data, [this.genWrapper()]);
  },
};
