import UAvatar from "@/components/UAvatar/UAvatar";

export default {
  name: "u-list-item-avatar",

  props: {
    size: {
      type: [Number, String],
      default: 40,
    },
  },

  render(h) {
    return h(UAvatar, {
      staticClass: "u-list-item__avatar",
      props: { size: this.size },
    });
  },
};
