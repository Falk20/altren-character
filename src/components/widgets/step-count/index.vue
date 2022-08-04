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

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltStepCount",

  components: {},

  computed: {
    ...mapGetters(["stepCount"]),
  },
});
</script>

<style></style>
