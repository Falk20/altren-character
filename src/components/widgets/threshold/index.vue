<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">
        Порог {{ calcThreshold }}
        <v-icon :color="color"> mdi-shield </v-icon>
        <span :class="`text-${color}`" v-if="calcThreshold === 0"
          >ТОБИ ПИЗДА</span
        >
      </h3>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltThreshold",

  computed: {
    ...mapGetters(["threshold", "fatigue"]),

    calcThreshold(): number {
      return this.threshold - this.fatigue;
    },

    color(): string {
      if (this.fatigue === 0) {
        return "teal";
      }

      if (this.calcThreshold === 0) {
        return "red";
      }

      return "orange";
    },
  },
});
</script>
