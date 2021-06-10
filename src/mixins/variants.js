export default {
  props: {
    variant: {
      type: String,
      validator: (value) =>
        ["primary", "success", "error", "warning", "info"].includes(value),
    },
  },
};
