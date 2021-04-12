import "./UIcon.scss";

export default {
  name: "u-icon",

  props: {
    filled: { type: Boolean },
    icon: { type: String },
    background: { type: String, default: "bg-gray-100" },
    color: { type: String, default: "text-gray-700" },
    left: { type: Boolean },
    small: { type: Boolean },
    right: { type: Boolean },
  },

  computed: {
    classes() {
      return {
        [this.icon]: true,
        "u-icon--left": this.left,
        "u-icon--right": this.right,
        "u-icon--small": this.small,
      };
    },

    filledClasses() {
      return {
        [this.background]: true,
        [this.color]: true,
        "u-small": this.small,
      };
    },
  },

  methods: {
    generateFilledIcon() {
      return this.$createElement(
        "div",
        {
          staticClass: "u-icon u-icon--filled",
          class: this.filledClasses,
        },
        [
          this.$createElement("span", {
            staticClass: "mdi",
            class: this.icon,
          }),
        ]
      );
    },

    generateIcon() {
      return this.$createElement("span", {
        staticClass: "u-icon mdi",
        class: this.classes,
      });
    },
  },

  render() {
    return this.filled ? this.generateFilledIcon() : this.generateIcon();
  },
};
