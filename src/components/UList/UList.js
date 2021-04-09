import "./UList.scss";

export default {
  name: "u-list",

  provide() {
    return {
      isInList: true,
      list: this,
    };
  },

  props: {
    dense: Boolean,
    disabled: Boolean,
    flat: Boolean,
    nav: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-list--dense": this.dense,
        "u-list--flat": this.flat,
        "u-list--disabled": this.disabled,
        "u-list--nav": this.nav,
      };
    },
  },

  render(h) {
    const data = {
      staticClass: "u-list",
      class: this.classes,
      style: this.styles,
    };

    return h("div", data, [this.$slots.default]);
  },
};
