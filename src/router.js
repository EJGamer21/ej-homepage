import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "sistema-inventario.engerjimenez.ga",
      name: "sistema-inventario",
      component: Home
    },
    {
      path: "/recetas-online",
      name: "recetas-online",
      component: Home
    }
  ]
});
