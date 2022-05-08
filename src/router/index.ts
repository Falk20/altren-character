import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import StatusView from "../views/StatusView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "status",
    component: StatusView,
    meta: {
      title: "Статус",
    },
  },
  {
    path: "/inventory",
    name: "inventory",
    component: import(
      /* webpackChunkName: "inventory" */ "../views/InventoryView.vue"
    ),
    meta: {
      title: "Инвентарь",
    },
  },
  {
    path: "/stats",
    name: "stats",
    component: import(/* webpackChunkName: "stats" */ "../views/StatsView.vue"),
    meta: {
      title: "Характеристики",
    },
  },
  {
    path: "/skills",
    name: "skills",
    component: import(
      /* webpackChunkName: "skills" */ "../views/SkillsView.vue"
    ),
    meta: {
      title: "Навыки",
    },
  },
  {
    path: "/personal",
    name: "personal",
    component: import(
      /* webpackChunkName: "personal" */ "../views/PersonalView.vue"
    ),
    meta: {
      title: "Личность",
    },
  },
  {
    path: "/abilities",
    name: "abilities",
    component: import(
      /* webpackChunkName: "abilities" */ "../views/AbilitiesView.vue"
    ),
    meta: {
      title: "Способности",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
