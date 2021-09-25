import Vue from "vue";
import App from "./App.vue";

import SogCalendar from "@/plugins/index";
Vue.use(SogCalendar);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
