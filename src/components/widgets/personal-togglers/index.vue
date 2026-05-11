<template>
  <v-container class="pa-0">
    <v-row  class="my-0">
      <AltCheckboxField
        v-model:value="isMage"
        title="Магическое существо"
      />
    </v-row>
    <v-row v-if="isMage" class="my-0">
      <AltCheckboxField
        v-model:value="isBasij"
        title="Басидж-каран"
      />
    </v-row>
    <v-row v-if="isMage && isBasij" class="my-0">
      <v-col class="mt-5">
        <v-slider
          class="mx-3"
          v-model="basijLevel"
          :min="defaultBasij"
          :max="maxBasij"
          :step="1"
          show-ticks="always"
          thumb-label="always"
          :hide-details="true"
        />
        <p class="text-label-large text-center my-0">Уровень Басиджа</p>
      </v-col>
    </v-row>
    <v-row class="my-0">
      <AltCheckboxField
        v-model:value="isBard"
        title="Бард"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defaultBasij, maxBasij } from "@/helpers/constants"

import AltCheckboxField from "@/components/atoms/checkbox-field.vue"

import { usePersonalInfoStore } from "@/store/stores/personal-info"
import { computed } from "vue"

const personalInfoStore = usePersonalInfoStore()

const isMage = computed({
  get: () => personalInfoStore.isMage,
  set: (value: boolean) => personalInfoStore.setIsMage(value),
})

const isBasij = computed({
  get: () => personalInfoStore.isBasij,
  set: (value: boolean) => personalInfoStore.setIsBasij(value),
})

const basijLevel = computed({
  get: () => personalInfoStore.basijLevel,
  set: (value: number) => personalInfoStore.setBasijLevel(value),
})

const isBard = computed({
  get: () => personalInfoStore.isBard,
  set: (value: boolean) => personalInfoStore.setIsBard(value),
})
</script>
