<template>
  <v-app-bar
    color="primary"
    density="compact"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        v-if="isAuth"
        @click="() => appStore.toggleSideMenu()"
      />
    </template>

    <v-app-bar-title>{{ $route.meta.title }}</v-app-bar-title>

    <template v-slot:append>
      <HeaderRight v-if="isAuth" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import HeaderRight from "@/components/widgets/header-right/index.vue";
import { useAppStore } from "@/store/stores/app";
import { useAuthStore } from "@/store/stores/auth";
import { computed } from "vue";

const appStore = useAppStore()

const authStore = useAuthStore()

const isAuth = computed(() => authStore.isAuth)
</script>
