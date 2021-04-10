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
    $sm() {
      return this.appWidth < 640;
    },

    $md() {
      return this.appWidth < 768;
    },

    $lg() {
      return this.appWidth < 1024;
    },

    $xl() {
      return this.appWidth >= 1024;
    },
  },

  methods: {
    handleResize() {
      this.appWidth = window.innerWidth;
    },
  },
};
