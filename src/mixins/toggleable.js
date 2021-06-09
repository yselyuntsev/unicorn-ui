export default {
  name: "toggleable",

  props: {
    value: { required: false },
  },

  data() {
    return {
      isActive: !!this.value,
    };
  },

  watch: {
    value(value) {
      this.isActive = !!value;
    },

    isActive(value) {
      !!value !== this.value && this.$emit("input", value);
    },
  },
};
