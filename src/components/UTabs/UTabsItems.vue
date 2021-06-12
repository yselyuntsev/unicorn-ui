<script>
import "./UTabsItems.scss";

import UTabsItem from "./UTabsItem.vue";

export default {
  name: "u-tabs-items",

  model: {
    prop: "selectedTab",
    event: "update",
  },

  components: { UTabsItem },

  props: {
    selectedTab: { type: Number },
  },

  render(h) {
    return h("div", { class: "unicorn-tabs-items" }, [
      h("transition", { props: { name: "tabs", mode: "out-in" } }, [
        h(UTabsItem, {}, [this.$slots.default[this.selectedTab]]),
      ]),
    ]);
  },
};
</script>
