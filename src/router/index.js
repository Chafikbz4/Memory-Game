import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import PlayPage from "@/views/PlayPage.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Play",
    path: "/Play",
    component: PlayPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
