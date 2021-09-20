import Vue from "vue";
import App from "./App.vue";

import SogCountTo from "../src/plugins/index";
Vue.use(SogCountTo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
