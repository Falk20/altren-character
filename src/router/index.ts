// Composables
import {
  RouteRecordSingleView,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import { useAuthStore } from "@/store/stores/auth";
import store from "@/store";
import { getCurrentUser } from "vuefire";
import StatusView from "@/views/StatusView.vue";
import StatsView from "@/views/StatsView.vue";
import PersonalView from "@/views/PersonalView.vue";
import InventoryView from "@/views/InventoryView.vue";
import SkillsView from "@/views/SkillsView.vue";
import StartView from "@/views/StartView.vue";
import NotesView from "@/views/NotesView.vue";
import QuestsView from "@/views/QuestsView.vue";
import AbilitiesView from "@/views/AbilitiesView.vue";

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
    path: "/notes",
    name: "notes",
    component: NotesView,
    meta: {
      title: "Заметки",
    },
  },
  {
    path: "/quests",
    name: "quests",
    component: QuestsView,
    meta: {
      title: "Задания",
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
  {
    path: "/abilities",
    name: "abilities",
    component: AbilitiesView,
    meta: {
      title: "Способности",
    },
  },
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
