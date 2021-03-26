<template>
  <div
    class="unicorn-alert"
    :class="[variant]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <u-icon v-if="icon" class="unicorn-alert__icon" :icon="icon" />

    <div class="unicorn-alert__body">
      <div v-if="$slots.title" class="unicorn-alert__title">
        <slot name="title"></slot>
      </div>

      <slot></slot>

      <div v-if="$slots.actions" class="unicorn-alert__actions">
        <slot name="actions"></slot>
      </div>
    </div>

    <div v-if="closable" class="unicorn-alert__close" @click="close">
      <u-icon icon="mdi-close" />
    </div>
  </div>
</template>

<script>
import UIcon from "@/components/UIcon";

export default {
  name: "UAlert",
  components: { UIcon },

  props: {
    icon: { type: String },
    variant: { type: String },
    closable: { type: Boolean },
  },

  methods: {
    close() {
      this.$emit("click:close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/mixins";

.unicorn-alert {
  @apply rounded-md p-4 flex;

  // Color
  @apply bg-gray-100 text-gray-700;

  &__icon {
    @apply text-gray-500 mr-4;
  }

  &__body {
    @apply flex-1 text-gray-500 text-sm;
  }

  &__title {
    @apply text-base;
    @apply text-gray-700 font-bold;
  }

  &__actions {
    @apply flex mt-4;
  }

  &__close {
    min-width: 2rem;
    max-width: 2rem;

    min-height: 2rem;
    max-height: 2rem;

    @apply flex items-center justify-center ml-4 rounded-md;
    @apply bg-gray-100 text-gray-700 transition-all;

    @include hover {
      &:hover {
        @apply bg-gray-200;
      }
    }

    &:active {
      @apply transform-gpu scale-90 shadow-inner;
    }
  }

  // Variants
  &.primary {
    @apply bg-purple-100;

    .unicorn-alert__title {
      @apply text-purple-700;
    }

    .unicorn-alert__body {
      @apply text-purple-500;
    }

    .unicorn-alert__icon {
      @apply text-purple-500;
    }

    .unicorn-alert__close {
      @apply bg-purple-100 text-purple-700;

      @include hover {
        &:hover {
          @apply bg-purple-200;
        }
      }
    }
  }

  &.secondary {
    @apply bg-gray-700;

    .unicorn-alert__title {
      @apply text-white;
    }

    .unicorn-alert__body {
      @apply text-gray-300;
    }

    .unicorn-alert__icon {
      @apply text-white;
    }

    .unicorn-alert__close {
      @apply bg-gray-700 text-white;

      @include hover {
        &:hover {
          @apply bg-gray-600;
        }
      }
    }
  }

  &.success {
    @apply bg-green-100;

    .unicorn-alert__title {
      @apply text-green-700;
    }

    .unicorn-alert__body {
      @apply text-green-500;
    }

    .unicorn-alert__icon {
      @apply text-green-500;
    }

    .unicorn-alert__close {
      @apply bg-green-100 text-green-700;

      @include hover {
        &:hover {
          @apply bg-green-200;
        }
      }
    }
  }

  &.danger {
    @apply bg-red-100;

    .unicorn-alert__title {
      @apply text-red-700;
    }

    .unicorn-alert__body {
      @apply text-red-500;
    }

    .unicorn-alert__icon {
      @apply text-red-500;
    }

    .unicorn-alert__close {
      @apply bg-red-100 text-red-700;

      @include hover {
        &:hover {
          @apply bg-red-200;
        }
      }
    }
  }

  &.warning {
    @apply bg-yellow-100;

    .unicorn-alert__title {
      @apply text-yellow-700;
    }

    .unicorn-alert__body {
      @apply text-yellow-500;
    }

    .unicorn-alert__icon {
      @apply text-yellow-500;
    }

    .unicorn-alert__close {
      @apply bg-yellow-100 text-yellow-700;

      @include hover {
        &:hover {
          @apply bg-yellow-200;
        }
      }
    }
  }

  &.info {
    @apply bg-blue-100;

    .unicorn-alert__title {
      @apply text-blue-700;
    }

    .unicorn-alert__body {
      @apply text-blue-500;
    }

    .unicorn-alert__icon {
      @apply text-blue-500;
    }

    .unicorn-alert__close {
      @apply bg-blue-100 text-blue-700;

      @include hover {
        &:hover {
          @apply bg-blue-200;
        }
      }
    }
  }
}
</style>
