import Vue from "vue";

export function toggleableFactory(prop = "value", event = "input") {
  return Vue.extend({
    name: "toggleable",

    model: { prop, event },

    props: {
      [prop]: { required: false },
    },

    data() {
      return {
        isActive: !!this[prop],
      };
    },

    watch: {
      [prop](value) {
        this.isActive = !!value;
      },

      isActive(value) {
        !!value !== this[prop] && this.$emit(event, value);
      },
    },
  });
}

const Toggleable = toggleableFactory();
export default Toggleable;
