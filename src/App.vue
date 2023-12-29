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
import { computed } from "vue";
import { useAuthStore } from "./store/stores/auth";
import AltNavbar from "@/components/navbar/index.vue";
import AltSideMenu from "@/components/side-menu/index.vue";

const authStore = useAuthStore()

const isAuth = computed(() => authStore.isAuth)
</script>

<style>
.v-container {
  max-width: 600px !important;
}
</style>