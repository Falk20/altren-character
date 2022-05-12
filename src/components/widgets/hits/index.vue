<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">HP {{ HP }}/{{ maxHits }}</h3>
      <div class="d-flex justify-space-between">
        <v-btn variant="text" icon="mdi-minus" @click="decrement" />
        <v-rating
          class="flex-wrap justify-center"
          v-model="HP"
          empty-icon="mdi-heart-outline"
          full-icon="mdi-heart"
          :length="maxHits"
          color="error"
        />
        <v-btn variant="text" icon="mdi-plus" @click="increment" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } =
  createNamespacedHelpers("character/status");

export default defineComponent({
  name: "AltHits",

  computed: {
    ...mapGetters(["hits", "maxHits"]),

    HP: {
      get(): number {
        return this.hits;
      },
      set(value: number): void {
        this.setHits(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setHits"]),

    decrement(): void {
      if (this.hits > 0) {
        this.setHits(this.hits - 1);
      }
    },

    increment(): void {
      if (this.hits < this.maxHits) {
        this.setHits(this.hits + 1);
      }
    },
  },
});
</script>
