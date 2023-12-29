<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <AltSelectField
          v-model:value="kind"
          label="Раса"
          :items="kinds"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { kinds } from "@/helpers/constants";

import AltSelectField from "@/components/atoms/select-field.vue";
import { usePersonalInfoStore } from "@/store/stores/personal-info";
import { computed } from "vue";

const personalInfoStore = usePersonalInfoStore()

const kind = computed({
  get: () => personalInfoStore.race,
  set: (value: string) => personalInfoStore.setKind(value)
})
</script>
