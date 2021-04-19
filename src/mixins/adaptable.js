import { throttle } from "@/utils/throttle";

export default {
  name: "adaptable",

  data() {
    return {
      appWidth: 0,
    };
  },

  created() {
    this.throttledResizeHandler = throttle(this.handleResize, 100);
    this.handleResize();
    window.addEventListener("resize", this.throttledResizeHandler);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.throttledResizeHandler);
  },

  computed: {
    $breakpoints() {
      return {
        isMobile: this.appWidth < 640,
      };
    },
  },

  methods: {
    handleResize() {
      this.appWidth = window.innerWidth;
    },
  },
};
