<template>
  <v-container>
    <AltConditions />
    <AltThreshold />
    <AltFatigue />
    <AltPointBars />
    <AltStepCount />
  </v-container>
</template>

<script setup lang="ts">
import AltConditions from "@/components/widgets/conditions/index.vue";
import AltThreshold from "@/components/widgets/threshold/index.vue";
import AltFatigue from "@/components/widgets/fatigue/index.vue";
import AltPointBars from "@/components/widgets/point-bars/index.vue";
import AltStepCount from "@/components/widgets/step-count/index.vue";
</script>
