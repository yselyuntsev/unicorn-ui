import "./UGrid.scss";

const breakpoints = ["sm", "md", "lg", "xl"];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false,
    };
    return props;
  }, {});
})();

function breakpointClass(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, "");
    className += `-${breakpoint}`;
  }
  // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.
  if (type === "col" && (val === "" || val === true)) {
    // .col-md
    return className.toLowerCase();
  }
  // .order-md-6
  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();

const propMap = {
  col: Object.keys(breakpointProps),
};

export default {
  name: "u-col",
  functional: true,

  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false,
    },
    ...breakpointProps,
  },

  render(h, { props, data, children }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = "";
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = [];
      // Loop through `col`, `offset`, `order` breakpoint props
      let type;
      for (type in propMap) {
        propMap[type].forEach((prop) => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some((className) =>
        className.startsWith("col-")
      );

      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
      });

      cache.set(cacheKey, classList);
    }

    return h(
      "div",
      { ...data, staticClass: "u-col", class: classList },
      children
    );
  },
};
