<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <AltTextField v-model="nameModel" label="Имя" />
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

import AltTextField from "@/components/atoms/text-field.vue";

export default defineComponent({
  name: "AltName",

  components: {
    AltTextField,
  },

  computed: {
    ...mapGetters(["name"]),

    nameModel: {
      get(): string {
        return this.name ?? "";
      },
      set(value: string) {
        this.setName(value);
      },
    },
  },

  methods: {
    ...mapMutations(["setName"]),
  },
});
</script>
