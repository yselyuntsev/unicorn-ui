export const lockScrollMixin = {
  mounted() {
    document.body.style.overflow = "hidden";
  },

  beforeDestroy() {
    document.body.style.overflow = "auto";
  },
};
