<template>
  <button
    class="unicorn-btn"
    :class="[variant, { text, block, icon, loading }]"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <span class="unicorn-btn__inner">
      <slot></slot>
    </span>

    <span class="unicorn-btn__loader" v-if="loading">
      <u-icon class="mdi-loading mdi-spin" />
    </span>
  </button>
</template>

<script>
import UIcon from "../UIcon/UIcon";
export default {
  name: "UButton",
  components: { UIcon },
  props: {
    variant: { type: String },
    text: { type: Boolean },
    block: { type: Boolean },
    icon: { type: Boolean },
    loading: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-btn {
  // Default
  min-width: 6rem;
  @apply inline-flex px-4 h-10 items-center justify-center rounded-md;
  @apply whitespace-nowrap;

  // Utils
  @apply outline-none transition-all relative;

  // Font
  @apply text-sm font-medium;

  // Colors
  @apply text-gray-700 bg-gray-100;

  @include hover {
    &:hover {
      @apply bg-gray-200;
    }

    &:focus {
      //@apply ring ring-gray-300;
      // ?? open question
    }
  }

  &:active {
    @apply transform-gpu scale-90 shadow-inner;
  }

  // Variants
  &.primary {
    @apply bg-purple-500 text-white;

    @include hover {
      &:hover {
        @apply bg-purple-400;
      }
    }

    // Text
    &.text {
      @apply text-purple-500 bg-transparent;

      @include hover {
        &:hover {
          @apply bg-purple-100;
        }
      }

      &:active {
        @apply bg-purple-100;
      }
    }
  }

  &.secondary {
    @apply bg-gray-700 text-white;

    @include hover {
      &:hover {
        @apply bg-gray-600;
      }
    }

    // Text
    &.text {
      @apply text-gray-700 bg-transparent;

      @include hover {
        &:hover {
          @apply bg-gray-100;
        }
      }

      &:active {
        @apply bg-gray-100;
      }
    }
  }

  &.success {
    @apply bg-green-400 text-white;

    @include hover {
      &:hover {
        @apply bg-green-300;
      }
    }

    // Text
    &.text {
      @apply text-green-400 bg-transparent;

      @include hover {
        &:hover {
          @apply bg-green-100;
        }
      }

      &:active {
        @apply bg-green-100;
      }
    }
  }

  &.danger {
    @apply bg-red-400 text-white;

    @include hover {
      &:hover {
        @apply bg-red-300;
      }
    }

    // Text
    &.text {
      @apply text-red-400 bg-transparent;

      @include hover {
        &:hover {
          @apply bg-red-100;
        }
      }

      &:active {
        @apply bg-red-100;
      }
    }
  }

  &.warning {
    @apply bg-yellow-400 text-white;

    @include hover {
      &:hover {
        @apply bg-yellow-300;
      }
    }

    // Text
    &.text {
      @apply text-yellow-400 bg-transparent;

      @include hover {
        &:hover {
          @apply bg-yellow-100;
        }
      }

      &:active {
        @apply bg-yellow-100;
      }
    }
  }

  &.info {
    @apply bg-blue-400 text-white;

    @include hover {
      &:hover {
        @apply bg-blue-300;
      }
    }

    // Text
    &.text {
      @apply text-blue-400 bg-transparent;

      @include hover {
        &:hover {
          @apply bg-blue-100;
        }
      }

      &:active {
        @apply bg-blue-100;
      }
    }
  }

  &.primary,
  &.secondary,
  &.success,
  &.danger,
  &.warning,
  &.info {
    &:active {
      @apply shadow-inner;
    }
  }

  // Block
  &.block {
    @apply w-full justify-center;
  }

  // UIcon
  &.icon {
    min-width: 2.5rem;
    min-height: 2.5rem;
    @apply w-10 h-10 p-0 items-center justify-center;
  }

  &.loading {
    .unicorn-btn__inner {
      @apply invisible;
    }
  }

  &__loader {
    @apply absolute flex items-center justify-center inset-0 rounded-md;
  }

  &[disabled] {
    @apply opacity-40 pointer-events-none;
  }
}
</style>
