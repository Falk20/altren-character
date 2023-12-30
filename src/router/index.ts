// Composables
import {
  RouteRecordSingleView,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import { getCurrentUser } from "vuefire";
import StatusView from "@/views/StatusView.vue";
import StatsView from "@/views/StatsView.vue";
import PersonalView from "@/views/PersonalView.vue";
import InventoryView from "@/views/InventoryView.vue";
import SkillsView from "@/views/SkillsView.vue";
import StartView from "@/views/StartView.vue";
import { useAuthStore } from "@/store/stores/auth";
import store from "@/store";

const routes: Array<RouteRecordSingleView> = [
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
    path: "/start",
    name: "start",
    component: StartView,
    meta: {
      title: "Старт",
      hideInNav: true,
    },
  },
  // {
  //   path: "/abilities",
  //   name: "abilities",
  //   component: import(
  //     /* webpackChunkName: "abilities" */ "@/views/AbilitiesView.vue"
  //   ),
  //   meta: {
  //     title: "Способности",
  //   },
  // },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  await getCurrentUser();

  const auth = useAuthStore(store);
  if (!auth.isAuth && to.name !== "start") {
    return { name: "start" };
  }
});

export default router;
