<script>
import "./UCard.scss";

export default {
  name: "u-card",

  props: {
    wheel: Boolean,
    gradient: Array,
    flat: Boolean,
  },

  computed: {
    classes() {
      return {
        "u-card": true,
        "u-card--wheel": this.wheel,
        "u-card--gradient": !this.wheel && this.gradient,
        "u-card--flat": this.flat,
      };
    },

    styles() {
      if (!this.gradient || !this.gradient.length) {
        return;
      }

      const gradientColors = this.gradient.join(",");
      const gradient = `linear-gradient(to top right, ${gradientColors})`;

      return {
        background: gradient,
      };
    },
  },

  render(h) {
    return h(
      "div",
      { class: this.classes, style: this.styles },
      this.$slots.default
    );
  },
};
</script>
