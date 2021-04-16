<script>
import "./UTabs.scss";

import UTabsItem from "./UTabsItem";

export default {
  name: "u-tabs-items",

  model: {
    prop: "selectedTab",
    event: "update",
  },

  props: {
    selectedTab: { type: Number },
  },

  render(h) {
    return h("div", { class: "u-tabs-items" }, [
      h(UTabsItem, {}, [this.$slots.default[this.selectedTab]]),
    ]);
  },
};
</script>
