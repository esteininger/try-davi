import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCamera from "@mrjeffapp/vuejs-camera";
import Chat from "vue-beautiful-chat";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(VueCamera);
Vue.use(Chat);
