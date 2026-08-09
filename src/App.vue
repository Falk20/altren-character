<template>
  <v-app>
    <AltNavbar />

    <AltSideMenu v-if="isAuth" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, watch } from "vue"
import { useAuthStore } from "./store/stores/auth"
import AltNavbar from "@/components/navbar/index.vue"
import AltSideMenu from "@/components/side-menu/index.vue"
import { useLocalStates } from "./shared/useLocalStates"
import { useRouter } from "vue-router"
import { useSyncWithCloud } from "./shared/useSyncWithCloud"

useSyncWithCloud()

const $router = useRouter()

const authStore = useAuthStore()

const isAuth = computed(() => authStore.isAuth)

const { currentCharlistID } = useLocalStates()

watch(
  currentCharlistID,
  (val) => {
    if (!val && $router.currentRoute.value.path !== "/start") {
      $router.push("/start")
    }
  },
  {
    immediate: true,
  },
)
</script>

<style>
.v-container {
  max-width: 600px !important;
}
</style>
