import { createRouter, createWebHistory } from "vue-router";
import { debug } from "../utils";
import AboutView from "../views/AboutView.vue";
import CategoryView from "../views/CategoryView.vue";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import InstructionView from "../views/InstructionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/instructions",
      name: "instructions",
      component: InstructionView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      props: (route) => ({ text: route.query.text }),
    },
    {
      path: "/category/:name",
      name: "category",
      component: CategoryView,
      props: true,
    },
  ],
});
router.beforeEach((to, from, next) => {
  debug.router.route(to, from);
  next();
});

export default router;
