<template>
  <v-row>
    <v-checkbox
      v-model="isMageModel"
      label="Магическое существо"
      color="primary"
      hide-details
    />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers(
  "character/personalInfo"
);

export default defineComponent({
  name: "AltIsMageToggler",

  computed: {
    ...mapGetters(["isMage"]),

    isMageModel: {
      get() {
        return this.isMage;
      },
      set(value: boolean) {
        this.setIsMage(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setIsMage"]),
  },
});
</script>

<style>
.v-label {
  opacity: 1;
}
</style>
