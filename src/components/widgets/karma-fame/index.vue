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
import AltNumberField from "@/components/atoms/number-field.vue";

import { useCharacterPersonalInfoStore } from "@/store/stores/character-personal-info";
import { computed } from "vue";

const personalInfoStore = useCharacterPersonalInfoStore()

const isMage = computed(() => personalInfoStore.isMage)

const isBard = computed(() => personalInfoStore.isBard)

const karma = computed({
  get: () => personalInfoStore.karma,
  set: (value: number) => personalInfoStore.setKarma(value)
})

const fame = computed({
  get: () => personalInfoStore.fame,
  set: (value: number) => personalInfoStore.setFame(value)
})
</script>
