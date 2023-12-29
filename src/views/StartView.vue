<template>
  <v-container class="h-100">
    <CharacterList v-if="isAuth" />
    <LoginButton v-else />
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAuthStore } from "@/store/stores/auth";

import LoginButton from "@/components/widgets/login-button/index.vue";
import CharacterList from "@/components/widgets/character-list/index.vue";

const authStore = useAuthStore()

const isAuth = computed(() => authStore.isAuth)
</script>
