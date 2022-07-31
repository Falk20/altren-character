import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import StatusView from "../views/StatusView.vue";
import StatsView from "../views/StatsView.vue";
import PersonalView from "../views/PersonalView.vue";
import InventoryView from "../views/InventoryView.vue";
import SkillsView from "../views/SkillsView.vue";

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
    component: InventoryView,
    meta: {
      title: "Инвентарь",
    },
  },
  {
    path: "/stats",
    name: "stats",
    // component: import(/* webpackChunkName: "stats" */ "../views/StatsView.vue")
    component: StatsView,
    meta: {
      title: "Характеристики",
    },
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
    meta: {
      title: "Навыки",
    },
  },
  {
    path: "/personal",
    name: "personal",
    component: PersonalView,
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
  history: createWebHashHistory("/altren-character/"),
  routes,
});

export default router;
