<template>
  <div class="u-ripple-effect"></div>
</template>

<script>
import "./URippleEffect.scss";
/**
 * Adapted from rippleJS (https://github.com/samthor/rippleJS, version 1.0.3)
 * removed jQuery, converted to ES6
 */
import classlist from "../../utils/classlist";
import elementRef from "../../utils/element-ref";
const startRipple = function (eventType, event) {
  let holder = event.currentTarget || event.target;
  if (holder && !classlist.has(holder, "u-ripple-effect")) {
    holder = holder.querySelector(".u-ripple-effect");
  }
  if (!holder) {
    return;
  }
  // Store the event use to generate this ripple on the holder: don't allow
  // further events of different types until we're done. Prevents double
  // ripples from mousedown/touchstart.
  const prev = holder.getAttribute("data-ui-event");
  if (prev && prev !== eventType) {
    return;
  }
  holder.setAttribute("data-ui-event", eventType);
  // Get ripple position
  const rect = holder.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  // Create the ripple
  const ripple = document.createElement("div");
  let max;
  if (rect.width === rect.height) {
    max = rect.width * 1.412;
  } else {
    max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
  }
  const size = max * 2 + "px";
  // Position the ripple
  ripple.style.width = size;
  ripple.style.height = size;
  ripple.style.marginLeft = -max + x + "px";
  ripple.style.marginTop = -max + y + "px";
  // Add the ripple element
  ripple.className = "u-ripple-effect__ink";
  holder.appendChild(ripple);
  setTimeout(() => {
    classlist.add(ripple, "is-held");
  }, 0);
  const releaseEvent = eventType === "mousedown" ? "mouseup" : "touchend";
  const handleRelease = function () {
    document.removeEventListener(releaseEvent, handleRelease);
    classlist.add(ripple, "is-done");
    // Larger than the animation duration in CSS
    const timeout = 650;
    setTimeout(() => {
      holder.removeChild(ripple);
      if (holder.children.length === 0) {
        holder.removeAttribute("data-ui-event");
      }
    }, timeout);
  };
  document.addEventListener(releaseEvent, handleRelease);
};
const handleMouseDown = function (e) {
  if (e.button === 0) {
    startRipple(e.type, e);
  }
};
const handleTouchStart = function (e) {
  if (e.changedTouches) {
    for (let i = 0; i < e.changedTouches.length; ++i) {
      startRipple(e.type, e.changedTouches[i]);
    }
  }
};
export default {
  name: "u-ripple-effect",
  props: {
    trigger: {
      validator(value) {
        return elementRef.validate(
          value,
          '[UiRippleInk]: Invalid prop: "trigger". Expected Element, VueComponent or CSS selector string.'
        );
      },
    },
  },
  watch: {
    trigger() {
      this.setupRipple();
    },
  },
  created() {
    this.triggerEl = null;
  },

  mounted() {
    this.setupRipple();
  },

  beforeDestroy() {
    this.destroyRipple();
  },

  methods: {
    setupRipple() {
      this.triggerEl = elementRef.resolve(this.trigger, this.$el.parentElement);

      if (!this.triggerEl) {
        console.error("[URippleEffect]: Trigger element not found.");
        return;
      }

      this.triggerEl.addEventListener("touchstart", handleTouchStart);
      this.triggerEl.addEventListener("mousedown", handleMouseDown);
    },
    destroyRipple() {
      if (!this.triggerEl) {
        return;
      }
      this.triggerEl.removeEventListener("mousedown", handleMouseDown);
      this.triggerEl.removeEventListener("touchstart", handleTouchStart);
    },
  },
};
</script>
