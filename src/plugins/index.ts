/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import Maska from "maska";

import { VueFire, VueFireAuth } from "vuefire";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseApp, auth } from "@/firebase/config";

import type { App } from "vue";
import { useAuthStore } from "@/store/stores/auth";

const unsub = onAuthStateChanged(auth, (user) => {
  const auth = useAuthStore(pinia);

  auth.setUser(user);

  unsub();
});

export function registerPlugins(app: App) {
  app
    .use(VueFire, {
      firebaseApp,
      modules: [VueFireAuth()],
    })
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Maska);
}
