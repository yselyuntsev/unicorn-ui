import "@/assets/index.css";
import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";
import App from "./App.vue";
import adaptable from "@/mixins/adaptable";

Vue.config.productionTip = false;

Vue.mixin(adaptable);

import * as components from "@/components";

console.log(components);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
