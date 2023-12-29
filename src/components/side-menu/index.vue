<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list
      density="compact"
      nav
    >
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
import { RouteRecordNormalized, useRouter } from "vue-router";
import AltExportJson from "./export-json.vue";
import { useAppStore } from "@/store/stores/app";
import { computed } from "vue";

const router = useRouter()
const appStore = useAppStore()

const drawer = computed({
  get: () => appStore.sideMenu,
  set: (value: boolean) => appStore.changeSideMenu(value)
})

const pageList = computed(() => router.getRoutes().filter((page) => !page.meta.hideInNav))

const getPageTitle = (page: RouteRecordNormalized) => page?.meta?.title as string ?? "";
</script>
