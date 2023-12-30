<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">
        Порог {{ calcThreshold }}
        <v-icon :color="color"> mdi-shield </v-icon>
        <span
          :class="`text-${color}`"
          v-if="calcThreshold === 0"
        >
          ТОБИ ПИЗДА
        </span>
      </h3>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useStatusStore } from '@/store/stores/status';
import { computed } from 'vue';

const statusStore = useStatusStore()

const calcThreshold = computed(() => statusStore.threshold - statusStore.fatigue)

const color = computed(() => {
  if (statusStore.fatigue === 0) {
    return "teal";
  }

  if (calcThreshold.value === 0) {
    return "red";
  }

  return "orange";
})
</script>
