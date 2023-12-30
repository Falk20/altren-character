<template>
  <v-container>
    <AltScaleField
      v-model:value="strength"
      title="Сила"
    />
    <AltScaleField
      v-model:value="agility"
      title="Ловкость"
    />
    <AltScaleField
      v-model:value="intelligence"
      title="Интеллект"
    />
    <AltScaleField
      v-model:value="charisma"
      title="Харизма"
    />
    <AltScaleField
      v-model:value="endurance"
      title="Выносливость"
    />
  </v-container>
</template>

<script setup lang="ts">
import AltScaleField from "@/components/atoms/scale-field.vue";
import { Stats } from "@/helpers/constants";
import { useStatsStore } from "@/store/stores/stats";
import { computed } from "vue";

const statsStore = useStatsStore()

const strength = computed({
  get: () => statsStore.strength,
  set: (value) => statsStore.setStat(Stats.strength, value)
})

const agility = computed({
  get: () => statsStore.agility,
  set: (value) => statsStore.setStat(Stats.agility, value)
})

const intelligence = computed({
  get: () => statsStore.intelligence,
  set: (value) => statsStore.setStat(Stats.intelligence, value)
})

const charisma = computed({
  get: () => statsStore.charisma,
  set: (value) => statsStore.setStat(Stats.charisma, value)
})

const endurance = computed({
  get: () => statsStore.endurance,
  set: (value) => statsStore.setStat(Stats.endurance, value)
})
</script>
