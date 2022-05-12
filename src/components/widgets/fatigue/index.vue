<template>
  <v-row class="pa-0 ma-0 mb-3 mt-7">
    <v-col class="pa-0">
      <v-slider
        v-model="value"
        :min="0"
        :max="threshold"
        :step="1"
        show-ticks="always"
        thumb-label="always"
        :hide-details="true"
      >
        <template v-slot:prepend>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-minus"
            @click="decrement"
          ></v-btn>
        </template>

        <template v-slot:append>
          <v-btn
            size="small"
            variant="text"
            icon="mdi-plus"
            @click="increment"
          ></v-btn>
        </template>
      </v-slider>
      <pre class="text-caption text-center">Усталость</pre>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } =
  createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltFatigue",

  computed: {
    ...mapGetters(["fatigue", "threshold"]),

    value: {
      get(): number {
        return this.fatigue;
      },
      set(value: number): void {
        this.setFatigue(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setFatigue"]),

    decrement(): void {
      if (this.fatigue > 0) {
        this.setFatigue(this.fatigue - 1);
      }
    },

    increment(): void {
      if (this.fatigue < this.threshold) {
        this.setFatigue(this.fatigue + 1);
      }
    },
  },
});
</script>
