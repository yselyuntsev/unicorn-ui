const HANDLER = "_vue_click_outside_handler";

function bind(el, binding, node) {
  unbind(el);

  const vm = node.context;

  const callback = binding.value;

  if (typeof callback !== "function") return;

  let initialMacrotaskEnded = false;

  setTimeout(function () {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function (ev) {
    const path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);

    if (
      initialMacrotaskEnded &&
      (path ? path.indexOf(el) < 0 : !el.contains(ev.target))
    ) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener("click", el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener("click", el[HANDLER], false);
  delete el[HANDLER];
}

const directive = {
  bind,
  update(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind,
};

export const mixin = {
  directives: { onClickOutside: directive },
};

export default directive;
