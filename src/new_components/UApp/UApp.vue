<script>
import "./UApp.scss";

export default {
  name: "u-app",

  provide() {
    const breakpoints = {};

    Object.defineProperty(breakpoints, "sm", {
      enumerable: true,
      get: () => this.sm,
    });

    Object.defineProperty(breakpoints, "md", {
      enumerable: true,
      get: () => this.md,
    });

    Object.defineProperty(breakpoints, "lg", {
      enumerable: true,
      get: () => this.lg,
    });

    Object.defineProperty(breakpoints, "xl", {
      enumerable: true,
      get: () => this.xl,
    });

    return { breakpoints };
  },

  data() {
    return {
      appWidth: window.innerWidth,
    };
  },

  computed: {
    sm() {
      return this.appWidth >= 640;
    },

    md() {
      return this.appWidth >= 768;
    },

    lg() {
      return this.appWidth >= 1024;
    },

    xl() {
      return this.appWidth >= 1280;
    },
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.appWidth = window.innerWidth;
    },
  },

  render(h) {
    return h("div", { staticClass: "u-app" }, this.$slots.default);
  },
};
</script>
