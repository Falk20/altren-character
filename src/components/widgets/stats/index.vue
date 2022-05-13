<template>
  <v-container>
    <AltScale v-model:value="strengthModel" title="Сила" />
    <AltScale v-model:value="agilityModel" title="Ловкость" />
    <AltScale v-model:value="intelligenceModel" title="Интеллект" />
    <AltScale v-model:value="charismaModel" title="Харизма" />
    <AltScale v-model:value="enduranceModel" title="Выносливость" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AltScale from "./Scale.vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("character/stats");

export default defineComponent({
  name: "AltStats",

  components: {
    AltScale,
  },

  computed: {
    ...mapGetters([
      "strength",
      "agility",
      "intelligence",
      "charisma",
      "endurance",
    ]),

    strengthModel: {
      get(): number {
        return this.strength;
      },
      set(value: number): void {
        this.setStat({
          statName: "strength",
          value,
        });
      },
    },
    agilityModel: {
      get(): number {
        return this.agility;
      },
      set(value: number): void {
        this.setStat({
          statName: "agility",
          value,
        });
      },
    },
    intelligenceModel: {
      get(): number {
        return this.intelligence;
      },
      set(value: number): void {
        this.setStat({
          statName: "intelligence",
          value,
        });
      },
    },
    charismaModel: {
      get(): number {
        return this.charisma;
      },
      set(value: number): void {
        this.setStat({
          statName: "charisma",
          value,
        });
      },
    },
    enduranceModel: {
      get(): number {
        return this.endurance;
      },
      set(value: number): void {
        this.setStat({
          statName: "endurance",
          value,
        });
      },
    },
  },

  methods: {
    ...mapMutations(["setStat"]),
  },
});
</script>

<style></style>
