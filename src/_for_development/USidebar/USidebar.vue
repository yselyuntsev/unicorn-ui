<template>
  <div>
    <div class="unicorn-sidebar-container" :class="{ collapse }">
      <aside class="unicorn-sidebar">
        <div class="unicorn-sidebar__header">
          <slot name="header" :is-collapse="collapse"></slot>
        </div>

        <div class="unicorn-sidebar__body">
          <slot></slot>
        </div>

        <div class="unicorn-sidebar__footer">
          <slot name="footer" :is-collapse="collapse"></slot>
        </div>

        <div
          v-if="collapsible"
          @click="toggleCollapse"
          class="unicorn-sidebar__collapse"
        >
          <u-icon class="unicorn-sidebar__icon" icon="mdi-chevron-left" />
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { throttle } from "../../utils/throttle";
import UIcon from "@/components/UIcon";

export default {
  name: "USidebar",
  components: { UIcon },

  model: {
    prop: "value",
    event: "update",
  },

  props: {
    collapsible: { type: Boolean },
    adaptive: { type: Boolean },
    value: { type: Boolean, default: null },
  },

  data() {
    return {
      collapsed: false,
    };
  },

  computed: {
    collapse() {
      return this.value || this.collapsed;
    },

    collapseModel: {
      get() {
        if (this.value === null) {
          return this.collapsed;
        } else {
          return this.value;
        }
      },

      set(newValue) {
        if (this.value === null) {
          this.collapsed = newValue;
        } else {
          this.$emit("update", newValue);
        }
      },
    },
  },

  watch: {
    adaptive: {
      handler(newValue) {
        newValue
          ? window.addEventListener("resize", this.throttledResizeHandler)
          : window.removeEventListener("resize", this.throttledResizeHandler);
      },
      immediate: true,
    },
  },

  created() {
    this.throttledResizeHandler = throttle(this.handleResize, 20);
  },

  beforeDestroy() {
    if (this.adaptive) {
      window.removeEventListener("resize", this.throttledResizeHandler);
    }
  },

  methods: {
    toggleCollapse() {
      this.collapseModel = !this.collapseModel;
    },

    handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1024) {
        this.collapseModel = true;
      } else {
        this.collapseModel = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-sidebar {
  @apply flex flex-col w-64 fixed left-0 top-0 bottom-0;
  @apply border-r px-4;
  @apply transition-all;

  &-container {
    @apply w-64 h-screen relative transition-all;

    &.collapse {
      @apply w-16;

      .unicorn-sidebar {
        @apply w-16 px-2;
      }

      .unicorn-sidebar-subtitle {
        @apply invisible;
      }

      .unicorn-sidebar-item {
        @apply origin-center px-3;
      }

      .unicorn-sidebar__collapse {
        @apply -translate-x-4;
      }

      .unicorn-sidebar__header {
        @apply mt-12 px-1;
      }

      .unicorn-sidebar__icon {
        @apply transform-gpu rotate-180;
      }
    }
  }

  &__header {
    @apply flex px-4 py-4 mb-8 overflow-hidden transition-all;
  }

  &__body {
    @apply flex-1 overflow-hidden;
  }

  &__footer {
    @apply flex py-4 mt-8 overflow-hidden;
  }

  &__icon {
    @apply transition-all;
  }

  &__collapse {
    min-width: 2rem;
    max-width: 2rem;
    min-height: 2rem;
    max-height: 2rem;

    @apply rounded-full border absolute right-0 bg-white;
    @apply flex items-center justify-center;
    @apply transform-gpu translate-x-4 translate-y-4;
    @apply transition-all text-gray-500;

    @include hover {
      &:hover {
        @apply bg-gray-100 cursor-pointer;
      }
    }

    &:active {
      @apply scale-90;
    }
  }
}
</style>
