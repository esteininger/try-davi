import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Upload from "../views/Upload.vue";
import Matching from "../views/Matching.vue";
import Complete from "../views/Complete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/upload",
    name: "upload",
    component: Upload
  },
  {
    path: "/matching",
    name: "matching",
    component: Matching
  },
  {
    path: "/complete",
    name: "complete",
    component: Complete
  }
];

const router = new VueRouter({
  routes
});

export default router;
