<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <AltSelectField v-model="kindModel" label="Раса" :items="kinds" />
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

import { kinds } from "@/helpers/constants";

import AltSelectField from "@/components/atoms/select-field.vue";

export default defineComponent({
  name: "AltName",

  components: {
    AltSelectField,
  },

  data() {
    return {
      kinds,
    };
  },

  computed: {
    ...mapGetters(["kind"]),

    kindModel: {
      get(): string {
        return this.kind ?? "";
      },
      set(value: string) {
        this.setKind(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setKind"]),
  },
});
</script>
