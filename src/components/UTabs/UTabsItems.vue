<script>
import UTabsItem from "@/components/UTabs/UTabsItem";

export default {
  name: "UTabsItems",

  model: {
    prop: "selectedTab",
    event: "update",
  },

  components: {
    UTabsItem,
  },

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

<style lang="scss" scoped>
.unicorn-tabs-items {
  @apply w-full mt-4;
}

.tabs-enter-active,
.tabs-leave-active {
  @apply transition-all;
}
.tabs-enter,
.tabs-leave-to {
  @apply opacity-0;
  @apply transform-gpu -translate-y-2;
}
</style>
