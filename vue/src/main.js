import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCamera from "@mrjeffapp/vuejs-camera";
import Chat from "vue-beautiful-chat";
import vuetify from "@/plugins/vuetify"; // path to vuetify export

// import 'vue2-dropzone/dist/vue2Dropzone.css'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueCamera);
Vue.use(Chat);
