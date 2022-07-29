<template>
  <v-container class="pa-0">
    <v-row>
      <AltCheckboxField
        v-model:value="isMageModel"
        title="Магическое существо"
      />
    </v-row>
    <v-row v-if="isMageModel">
      <AltCheckboxField v-model:value="isBasijModel" title="Басидж-каран" />
    </v-row>
    <v-row v-if="isMageModel && isBasijModel">
      <v-col class="mt-5">
        <v-slider
          v-model="basijLevelModel"
          :min="defaultBasij"
          :max="maxBasij"
          :step="1"
          show-ticks="always"
          thumb-label="always"
          :hide-details="true"
        />
        <pre class="text-caption text-center">Уровень Басиджа</pre>
      </v-col>
    </v-row>
    <v-row>
      <AltCheckboxField v-model:value="isBardModel" title="Бард" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defaultBasij, maxBasij } from "@/helpers/constants";
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers(
  "character/personalInfo"
);

import AltCheckboxField from "@/components/atoms/checkbox-field.vue";

export default defineComponent({
  name: "AltPersonalTogglers",

  components: {
    AltCheckboxField,
  },

  data() {
    return {
      defaultBasij,
      maxBasij,
    };
  },

  computed: {
    ...mapGetters(["isMage", "isBasij", "basijLevel", "isBard"]),

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
    basijLevelModel: {
      get() {
        return this.basijLevel ?? 2;
      },
      set(value: number) {
        this.setBasijLevel(value);
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
    ...mapMutations(["setIsMage", "setIsBasij", "setBasijLevel", "setIsBard"]),
  },
});
</script>
