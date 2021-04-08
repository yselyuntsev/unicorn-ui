export function createFunctionalComponent(c, el = "div", name) {
  return {
    name: name || c.replace(/__/g, "-"),

    functional: true,

    render(h, { data, children }) {
      data.staticClass = `${c} ${data.staticClass || ""}`.trim();

      return h(el, data, children);
    },
  };
}
