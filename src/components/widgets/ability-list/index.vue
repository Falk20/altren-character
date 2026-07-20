<template>
  <v-container>
    <v-btn
      prepend-icon="mdi-plus"
      block
      variant="tonal"
      color="green"
      @click="addNewAbility"
    >
      Добавить
    </v-btn>

    <draggable
      v-model="abilities"
      @start="drag = true"
      @end="drag = false"
      item-key="index"
      handle=".handle"
    >
      <template #item="{ element }">
        <AbilityCard :ability="element" />
      </template>
    </draggable>
  </v-container>
</template>

<script setup lang="ts">
import draggable from "vuedraggable"
import { useAbilitiesStore } from "@/store/stores/abilities"
import { computed, ref } from "vue"
import AbilityCard from "./ability-card.vue"

const drag = ref(false)

const abilitiesStore = useAbilitiesStore()

const abilities = computed({
  get: () => abilitiesStore.abilities,
  set: (newVal) => (abilitiesStore.abilities = newVal),
})

const addNewAbility = () => abilitiesStore.addNewAbility()
</script>
