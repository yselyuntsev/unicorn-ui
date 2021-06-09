<script>
import Toggleable from "../mixins/toggleable";

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
</script>

<style lang="scss" scoped>
.u-overlay {
  @apply inset-0 fixed bg-black bg-opacity-40;
  z-index: 50;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-all;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
