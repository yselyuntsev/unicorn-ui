<template>
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
        <Icon icon="mdi-menu" />
        x
      </div>
    </aside>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon";
export default {
  name: "Sidebar",
  components: { Icon },

  props: {
    collapsible: { type: Boolean },
  },

  data() {
    return {
      collapse: false,
    };
  },

  methods: {
    toggleCollapse() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-sidebar {
  @apply flex flex-col w-64 fixed left-0 top-0 bottom-0;
  @apply border-r px-4 border-gray-100;
  @apply transition-all;

  &-container {
    @apply w-64 h-screen relative transition-all;

    &.collapse {
      @apply w-14;

      .unicorn-sidebar {
        @apply w-14 px-2;
      }

      .unicorn-sidebar-subtitle {
        @apply invisible;
      }

      .unicorn-sidebar-item {
        @apply origin-center;
      }

      .unicorn-sidebar__collapse {
        @apply translate-x-12;
      }
    }
  }

  &__header {
    @apply flex p-4 mb-8 overflow-hidden;
  }

  &__body {
    @apply flex-1 overflow-hidden;
  }

  &__footer {
    @apply flex p-5 mt-8 overflow-hidden;
  }

  &__collapse {
    min-width: 2rem;
    max-width: 2rem;
    min-height: 2rem;
    max-height: 2rem;

    @apply rounded-md border absolute right-0 bg-white;
    @apply flex items-center justify-center;
    @apply transform-gpu translate-x-4 translate-y-4;
    @apply transition-all text-gray-700 border-gray-100;

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
