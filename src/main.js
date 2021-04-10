import "@/assets/index.css";
import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";
import App from "./App.vue";
import adaptable from "@/mixins/adaptable";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mixins: [adaptable],
}).$mount("#app");
