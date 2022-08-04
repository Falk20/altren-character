<template>
  <v-container>
    <AltConditions />
    <AltThreshold />
    <AltFatigue />
    <AltPointBars />
    <AltStepCount />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AltConditions from "@/components/widgets/conditions/index.vue";
import AltThreshold from "@/components/widgets/threshold/index.vue";
import AltFatigue from "@/components/widgets/fatigue/index.vue";
import AltPointBars from "@/components/widgets/point-bars/index.vue";
import AltStepCount from "@/components/widgets/step-count/index.vue";

export default defineComponent({
  name: "StatusView",

  components: {
    AltConditions,
    AltThreshold,
    AltFatigue,
    AltPointBars,
    AltStepCount,
  },
});
</script>
