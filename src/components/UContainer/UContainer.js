import "./UContainer.scss";
export default {
  name: "u-container",

  props: {
    fluid: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-container": true,
        "u-container--container": !this.fluid,
        "u-container--fluid": this.fluid,
      };
    },
  },

  render(h) {
    return h(
      "div",
      {
        class: this.classes,
      },
      this.$slots.default
    );
  },
};
