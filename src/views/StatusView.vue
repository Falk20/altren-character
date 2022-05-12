<template>
  <v-container>
    <AltConditions />
    <AltThreshold />
    <AltFatigue />
    <AltHits />
    <AltMana />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AltConditions from "@/components/widgets/conditions/index.vue";
import AltHits from "@/components/widgets/hits/index.vue";
import AltMana from "@/components/widgets/mana/index.vue";
import AltThreshold from "@/components/widgets/threshold/index.vue";
import AltFatigue from "@/components/widgets/fatigue/index.vue";

export default defineComponent({
  name: "StatusView",

  components: {
    AltConditions,
    AltHits,
    AltMana,
    AltThreshold,
    AltFatigue,
  },
});
</script>
