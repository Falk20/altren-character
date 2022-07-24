<template>
  <v-container class="pa-0">
    <v-row>
      <AltPersonalToggler
        v-model:value="isMageModel"
        title="Магическое существо"
      />
    </v-row>
    <v-row v-if="isMageModel">
      <AltPersonalToggler v-model:value="isBasijModel" title="Басидж" />
    </v-row>
    <v-row>
      <AltPersonalToggler v-model:value="isBardModel" title="Бард" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers(
  "character/personalInfo"
);

import AltPersonalToggler from "./personal-toggler.vue";

export default defineComponent({
  name: "AltPersonalTogglers",

  components: {
    AltPersonalToggler,
  },

  computed: {
    ...mapGetters(["isMage", "isBasij", "isBard"]),

    isMageModel: {
      get() {
        return this.isMage ?? false;
      },
      set(value: boolean) {
        this.setIsMage(value);

        if (!value) {
          this.isBasijModel = false;
        }
      },
    },
    isBasijModel: {
      get() {
        return this.isBasij ?? false;
      },
      set(value: boolean) {
        this.setIsBasij(value);
      },
    },
    isBardModel: {
      get() {
        return this.isBard ?? false;
      },
      set(value: boolean) {
        this.setIsBard(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setIsMage", "setIsBasij", "setIsBard"]),
  },
});
</script>
