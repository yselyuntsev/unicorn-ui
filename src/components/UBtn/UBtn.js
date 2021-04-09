import "./UBtn.scss";
import UIcon from "@/components/UIcon";

export default {
  name: "u-btn",

  components: { UIcon },

  props: {
    text: Boolean,
    outlined: Boolean,
    block: Boolean,
    small: Boolean,
    icon: Boolean,
    disabled: Boolean,
    loading: Boolean,
    value: [String, Number, Array, Object, null],
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "default",
      validator: (val) =>
        ["default", "primary", "success", "error", "warning", "info"].includes(
          val
        ),
    },
  },

  computed: {
    classes() {
      return {
        "u-btn": true,
        [`u-btn--${this.variant}`]: true,
        "u-btn--block": this.block,
        "u-btn--disabled": this.disabled,
        "u-btn--icon": this.icon,
        "u-btn--loading": this.loading,
        "u-btn--small": this.small,
        "u-btn--outlined": this.outlined,
        "u-btn--text": this.text,
      };
    },
  },

  methods: {
    generateLoader() {
      if (this.loading) {
        return this.$createElement(
          "span",
          {
            staticClass: "u-btn__loader",
          },
          [
            this.$createElement(UIcon, {
              props: { icon: "mdi-loading mdi-spin" },
            }),
          ]
        );
      }
    },

    generateContent() {
      return this.$createElement(
        "span",
        { staticClass: "u-btn__content" },
        this.$slots.default
      );
    },

    click(e) {
      return this.$emit("click", e);
    },
  },

  render(h) {
    const children = [this.generateContent(), this.generateLoader()];

    return h(
      "button",
      {
        staticClass: "u-btn",
        class: this.classes,
        attrs: {
          type: this.type,
          disabled: this.disabled,
          value: this.value,
        },

        on: {
          click: this.click,
        },
      },
      children
    );
  },
};
