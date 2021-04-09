<script>
import UTab from "@/_for_development/UTabs/UTab";

export default {
  name: "UTabs",

  components: { UTab },

  model: {
    prop: "tab",
    event: "update",
  },

  props: {
    tab: { type: Number },
  },

  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },

  created() {
    this.tabs = this.$slots.default;
  },

  mounted() {
    this.selectTab(0);
  },

  methods: {
    selectTab(index) {
      this.selectedIndex = index;

      this.$emit("update", this.selectedIndex);
    },

    isSelected(index) {
      return this.selectedIndex === index;
    },
  },

  render(h) {
    const children = this.tabs.map((tab, index) =>
      h(
        UTab,
        {
          props: {
            active: this.isSelected(index),
          },

          on: {
            click: () => this.selectTab(index),
          },
        },
        tab.componentOptions.children
      )
    );

    return h("div", { attrs: { class: "unicorn-tabs" } }, [children]);
  },
};
</script>

<style lang="scss" scoped>
.unicorn-tabs {
  @apply flex w-full;
}
</style>
