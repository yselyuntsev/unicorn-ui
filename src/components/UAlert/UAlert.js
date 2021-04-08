import "./UAlert.scss";

import UIcon from "@/components/UIcon/UIcon";
import UButton from "@/components/UBtn/UBtn";

export default {
  name: "u-alert",

  components: { UIcon, UButton },

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
        "u-alert--dismissible": this.dismissible,
        "u-alert--outlined": this.outlined,
        "u-alert--prominent": this.prominent,
        "u-alert--text": this.text,
      };

      if (this.variant) {
        classes[`u-alert--${this.variant}`] = true;
      }

      return classes;
    },
  },

  methods: {
    generateContent() {
      return this.$createElement(
        "div",
        {
          staticClass: "u-alert__content",
        },
        this.$slots.default
      );
    },

    generateIcon() {
      if (this.icon) {
        return this.$createElement(UIcon, {
          staticClass: "u-alert__icon",
          props: { icon: this.icon },
        });
      }
    },

    generateDismissible() {
      if (this.dismissible) {
        const closeIcon = this.$createElement(UIcon, {
          props: {
            icon: this.closeIcon,
          },
        });

        return this.$createElement(
          UButton,
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

    generateWrapper() {
      const children = [
        this.generateIcon(),
        this.generateContent(),
        this.generateDismissible(),
      ];
      const data = { staticClass: "u-alert__wrapper" };
      return this.$createElement("div", data, children);
    },

    generateAlert() {
      const data = {
        staticClass: "u-alert",
        attrs: { role: "alert" },
        class: this.classes,
      };

      return this.$createElement("div", data, [this.generateWrapper()]);
    },
  },

  render() {
    return this.generateAlert();
  },
};
