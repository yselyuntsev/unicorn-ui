import Vue from "vue";
import UOverlay from "../helpers/UOverlay";
import { addOnceEventListener } from "../utils/addOnceEventListener";

export default {
  name: "overlayable",

  data() {
    return {
      animationFrame: 0,
      overlay: null,
    };
  },

  beforeDestroy() {
    this.removeOverlay();
  },

  methods: {
    createOverlay() {
      const overlay = new Vue(UOverlay);
      overlay.$mount();

      const parent = this.$el.parentNode;
      parent && parent.insertBefore(overlay.$el, parent.firstChild);

      this.overlay = overlay;

      this.overlay.$on("click", this.removeOverlay);
    },

    generateOverlay() {
      if (!this.overlay) this.createOverlay();

      this.animationFrame = requestAnimationFrame(() => {
        if (!this.overlay) return;
        this.overlay.value = true;
      });

      return true;
    },

    removeOverlay() {
      if (this.overlay) {
        addOnceEventListener(this.overlay.$el, "transitionend", () => {
          if (
            !this.overlay ||
            !this.overlay.$el ||
            !this.overlay.$el.parentNode ||
            this.overlay.value
          )
            return;

          this.overlay.$el.parentNode.removeChild(this.overlay.$el);
          this.overlay.$destroy();
          this.overlay = null;
        });

        cancelAnimationFrame(this.animationFrame);

        this.overlay.value = false;
        this.isActive ? (this.isActive = false) : null;
      }
    },
  },
};
