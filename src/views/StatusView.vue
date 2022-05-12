<template>
  <v-container>
    <AltHits />
    <AltMana />
    <AltThreshold />
    <AltFatigue />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AltHits from "@/components/widgets/hits/index.vue";
import AltMana from "@/components/widgets/mana/index.vue";
import AltThreshold from "@/components/widgets/threshold/index.vue";
import AltFatigue from "@/components/widgets/fatigue/index.vue";

export default defineComponent({
  name: "StatusView",

  components: {
    AltHits,
    AltMana,
    AltThreshold,
    AltFatigue,
  },
});
</script>
