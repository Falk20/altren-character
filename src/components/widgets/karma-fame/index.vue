<template>
  <v-container class="pa-0" v-if="isMage || isBard">
    <v-row>
      <v-col v-if="isMage">
        <AltNumberField v-model="karmaModel" label="Карма" />
      </v-col>
      <v-col v-if="isBard">
        <AltNumberField v-model="fameModel" label="Известность" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers(
  "character/personalInfo"
);

import AltNumberField from "@/components/atoms/number-field.vue";

export default defineComponent({
  name: "AltKarmaFame",

  components: {
    AltNumberField,
  },

  computed: {
    ...mapGetters(["isMage", "isBard", "karma", "fame"]),

    karmaModel: {
      get(): number {
        return this.karma ?? 0;
      },
      set(value: number) {
        this.setKarma(value);
      },
    },
    fameModel: {
      get(): number {
        return this.fame ?? 0;
      },
      set(value: number) {
        this.setFame(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setKarma", "setFame"]),
  },
});
</script>
