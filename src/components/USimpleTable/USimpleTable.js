import "./USimpleTable.scss";
import { convertToUnit } from "@/utils/convertToUnit";

export default {
  name: "u-simple-table",

  props: {
    dense: Boolean,
    fixedHeader: Boolean,
    height: [Number, String],
  },

  computed: {
    classes() {
      return {
        "u-data-table--dense": this.dense,
        "u-data-table--fixed-height": !!this.height && !this.fixedHeader,
        "u-data-table--fixed-header": this.fixedHeader,
        "u-data-table--has-top": !!this.$slots.top,
        "u-data-table--has-bottom": !!this.$slots.bottom,
      };
    },
  },

  methods: {
    genWrapper() {
      return (
        this.$slots.wrapper ||
        this.$createElement(
          "div",
          {
            staticClass: "u-data-table__wrapper",
            style: {
              height: convertToUnit(this.height),
            },
          },
          [this.$createElement("table", this.$slots.default)]
        )
      );
    },
  },

  render(h) {
    return h(
      "div",
      {
        staticClass: "u-data-table",
        class: this.classes,
      },
      [this.$slots.top, this.genWrapper(), this.$slots.bottom]
    );
  },
};
