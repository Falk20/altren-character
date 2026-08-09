<template>
  <v-list density="compact" nav>
    <v-list-item title="Экспорт" @click="importJson"></v-list-item>
    <v-list-item title="Выход" class="red" @click="logOut"></v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { googleSignOut } from "@/firebase/config"
import { useLocalStates } from "@/shared/useLocalStates"
import { useAppStore } from "@/store/stores/app"
import { useRouter } from "vue-router"

const router = useRouter()
const appStore = useAppStore()

const logOut = async () => {
  await googleSignOut()

  appStore.changeSideMenu()

  router.push("/start")
}

const { getCurrentCharList } = useLocalStates()

const importJson = () => {
  const stateJson = JSON.stringify(getCurrentCharList())
  const stateFile =
    "data:text/json;charset=utf-8," + encodeURIComponent(stateJson)

  const linkElem = document.createElement("a")
  linkElem.setAttribute("href", stateFile)
  linkElem.setAttribute("download", "character.json")
  linkElem.click()
}
</script>

<style>
.red {
  color: rgb(var(--v-theme-error));
}
</style>
