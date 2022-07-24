<template>
  <v-container class="pa-0">
    <v-row class="pa-0 ma-0 mb-3">
      <v-col class="pa-0">
        <AltPointBar
          v-model:value="hitsModel"
          v-bind="hitsBar"
          :maxValue="maxHits"
        />
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0 mb-3">
      <v-col class="pa-0">
        <AltPointBar
          v-model:value="manaModel"
          v-bind="manaBar"
          :maxValue="maxMana"
        />
      </v-col>
    </v-row>
    <v-row v-if="isBard" class="pa-0 ma-0 mb-3">
      <v-col class="pa-0">
        <AltPointBar
          v-model:value="inspirationModel"
          v-bind="inspirationBar"
          :maxValue="maxInspiration"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { getCurrentPointBar } from "@/helpers/utils";
import { HPBar, InspirationBar } from "@/helpers/viewConstants";
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapMutations } =
  createNamespacedHelpers("character/status");

import AltPointBar from "./point-bar.vue";

export default defineComponent({
  name: "AltPersonalTogglers",

  components: {
    AltPointBar,
  },

  computed: {
    ...mapGetters([
      "isMage",
      "isBasij",
      "isBard",
      "hits",
      "maxHits",
      "mana",
      "maxMana",
      "inspiration",
      "maxInspiration",
    ]),

    hitsModel: {
      get(): number {
        return this.hits;
      },
      set(value: number): void {
        this.setHits(value);
      },
    },

    manaModel: {
      get(): number {
        return this.mana;
      },
      set(value: number): void {
        this.setMana(value);
      },
    },

    inspirationModel: {
      get(): number {
        return this.inspiration;
      },
      set(value: number): void {
        this.setInspiration(value);
      },
    },

    hitsBar() {
      return HPBar;
    },

    manaBar() {
      return getCurrentPointBar(this.isMage, this.isBasij);
    },

    inspirationBar() {
      return InspirationBar;
    },
  },

  methods: {
    ...mapMutations(["setHits", "setMana", "setInspiration"]),
  },
});
</script>
