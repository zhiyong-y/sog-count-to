import Vue from "vue";
import App from "./App.vue";

import SogCountTo from "../packages/index";
Vue.use(SogCountTo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
