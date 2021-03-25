<script>
import { throttle } from "../../utils/throttle";

export default {
  name: "UHideAt",

  props: {
    breakpoints: {
      type: Object,
      default: () => ({
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }),
    },

    breakpoint: { type: String, required: true },
  },

  data() {
    return {
      show: true,
    };
  },

  created() {
    this.throttledResizeHandler = throttle(this.handleResize, 200);
  },

  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.throttledResizeHandler);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.throttledResizeHandler);
  },

  methods: {
    handleResize() {
      const screenWidth = window.innerWidth;
      const point = this.breakpoints[this.breakpoint];
      this.show = screenWidth < point;
    },
  },

  render() {
    if (this.show) {
      return this.$slots.default ? this.$slots.default[0] : null;
    }

    return null;
  },
};
</script>
