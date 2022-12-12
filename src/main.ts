import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Maska from "maska";
import "./registerServiceWorker";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).use(Maska).mount("#app");
