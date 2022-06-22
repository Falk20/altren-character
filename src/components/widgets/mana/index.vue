<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">{{ title }} {{ MP }}/{{ maxMana }}</h3>
      <div class="d-flex justify-space-between">
        <v-btn variant="text" icon="mdi-minus" @click="decrement" />
        <v-rating
          class="flex-wrap justify-center"
          v-model="MP"
          :empty-icon="emptyIcon"
          :full-icon="fullIcon"
          :length="maxMana"
          :color="color"
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
  name: "AltMana",

  computed: {
    ...mapGetters(["mana", "maxMana", "isMage"]),

    title(): string {
      return this.isMage ? "MP" : "EP";
    },

    emptyIcon(): string {
      return this.isMage ? "mdi-star-outline" : "mdi-flash-outline";
    },

    fullIcon(): string {
      return this.isMage ? "mdi-star" : "mdi-flash";
    },

    color(): string {
      return this.isMage ? "primary" : "yellow-darken-1";
    },

    MP: {
      get(): number {
        return this.mana;
      },
      set(value: number): void {
        this.setMana(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setMana"]),

    decrement(): void {
      if (this.mana > 0) {
        this.setMana(this.mana - 1);
      }
    },

    increment(): void {
      if (this.mana < this.maxMana) {
        this.setMana(this.mana + 1);
      }
    },
  },
});
</script>
