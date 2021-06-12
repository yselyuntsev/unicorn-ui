<script>
import "./UDialog.scss";

import UDismissButton from "../UDismissButton/UDismissButton";

export default {
  name: "u-dialog",

  components: { UDismissButton },

  props: {
    width: Number,
    value: Boolean,
  },

  data() {
    return {
      show: false,

      //  transition controllers
      showContent: false,
    };
  },

  computed: {
    styles() {
      return {
        maxWidth: this.width + "px",
      };
    },
  },

  watch: {
    value: {
      handler(value) {
        value ? this.open() : this.closeContent();
      },
    },
  },

  methods: {
    open() {
      this.show = true;
      this.$root.$el.append(this.$refs.dialog);
    },

    openContent() {
      this.showContent = true;
    },

    closeContent() {
      this.showContent = false;
    },

    close() {
      this.show = false;
      this.$emit("input");
    },

    genListeners() {
      const listeners = {};
      listeners.click = () => this.open();
      return listeners;
    },
  },
};
</script>

<template>
  <div class="u-dialog">
    <slot name="activator" :on="genListeners()"></slot>

    <div ref="dialog">
      <transition @enter="openContent" appear name="splash">
        <div
          v-if="show"
          @click.self.prevent="closeContent"
          class="u-dialog__body"
        >
          <transition @leave="close" name="dialog">
            <div v-if="showContent" :style="styles" class="u-dialog__content">
              <u-dismiss-button
                @click="closeContent"
                class="u-dialog__dismiss"
              />
              <slot></slot>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>
