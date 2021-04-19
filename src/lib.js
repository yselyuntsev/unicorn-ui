import "@/assets/index.css";

import * as components from "@/components";
import adaptable from "@/mixins/adaptable";

const ComponentLibrary = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }

    Vue.mixin(adaptable);
  },
};

export default ComponentLibrary;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
