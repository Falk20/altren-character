<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">
        Шаги за ход: {{ stepCount }}
        <v-icon color="teal"> mdi-arrow-up-bold-hexagon-outline </v-icon>
      </h3>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useStatusStore } from '@/store/stores/status';
import { computed } from 'vue';

const statusStore = useStatusStore()
const stepCount = computed(() => statusStore.stepCount)
</script>

<style></style>
