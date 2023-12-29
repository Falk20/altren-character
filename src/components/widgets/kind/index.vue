<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <AltSelectField v-model="kind" label="Раса" :items="kinds" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { kinds } from "@/helpers/constants";

import AltSelectField from "@/components/atoms/select-field.vue";
import { useCharacterPersonalInfoStore } from "@/store/stores/character-personal-info";
import { computed } from "vue";

const personalInfoStore = useCharacterPersonalInfoStore()

const kind = computed({
  get: () => personalInfoStore.race,
  set: (value: string) => personalInfoStore.setKind(value)
})
</script>
