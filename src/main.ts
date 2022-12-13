import { createApp } from "vue";
import Maska from "maska";
import { VueFire, VueFireAuth } from "vuefire";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseApp, auth } from "@/firebase/config";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import "./registerServiceWorker";

loadFonts();

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("app/auth/setUser", user);
  unsub();
});

createApp(App)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Maska)
  .mount("#app");
