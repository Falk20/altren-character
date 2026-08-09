<template>
  <v-container class="pa-0" v-if="isMage || isBard">
    <v-row>
      <v-col v-if="isMage">
        <AltNumberField v-model="karma" label="Карма" />
      </v-col>
      <v-col v-if="isBard">
        <AltNumberField v-model="fame" label="Известность" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import AltNumberField from "@/components/atoms/number-field.vue"

import { usePersonalInfoStore } from "@/store/stores/personal-info"
import { computed } from "vue"

const personalInfoStore = usePersonalInfoStore()

const isMage = computed(() => personalInfoStore.personalInfo.isMage)

const isBard = computed(() => personalInfoStore.personalInfo.isBard)

const karma = computed({
  get: () => personalInfoStore.personalInfo.karma,
  set: (value: number) => personalInfoStore.setKarma(value),
})

const fame = computed({
  get: () => personalInfoStore.personalInfo.fame,
  set: (value: number) => personalInfoStore.setFame(value),
})
</script>
