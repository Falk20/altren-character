import { registerPlugins } from "@/plugins"

import App from "./App.vue"

import { createApp } from "vue"
import { vMaska } from "maska/vue"

const app = createApp(App)

registerPlugins(app)
app.directive("maska", vMaska)

app.mount("#app")
