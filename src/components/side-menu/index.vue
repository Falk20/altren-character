<template>
  <v-navigation-drawer v-model="drawer" :temporary="mobile">
    <v-list density="compact" nav>
      <v-list-item
        v-for="(page, index) in pageList"
        :key="index"
        :to="{ name: page.name }"
        :title="getPageTitle(page)"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <AltExportJson />
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { RouteRecordNormalized, useRouter } from "vue-router"
import AltExportJson from "./export-json.vue"
import { useAppStore } from "@/store/stores/app"
import { computed } from "vue"
import { useDisplay } from "vuetify"
import { useLocalStates } from "@/shared/useLocalStates.js"

const { mobile } = useDisplay()

const router = useRouter()
const appStore = useAppStore()

const drawer = computed({
  get: () => appStore.sideMenu,
  set: (value: boolean) => appStore.changeSideMenu(value),
})

const { currentCharlistID } = useLocalStates()

const pageList = computed(() =>
  currentCharlistID.value
    ? router.getRoutes().filter((page) => !page.meta.hideInNav)
    : [],
)

const getPageTitle = (page: RouteRecordNormalized) =>
  (page?.meta?.title as string) ?? ""
</script>
