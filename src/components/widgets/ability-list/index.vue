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

    <AbilityCard
      v-for="(ability, index) in abilities"
      :key="'ability-' + index"
      :ability="ability"
    />
  </v-container>
</template>

<script setup lang="ts">
import { useAbilitiesStore } from '@/store/stores/abilities';
import { computed } from 'vue';
import AbilityCard from './ability-card.vue';

const abilitiesStore = useAbilitiesStore()

const abilities = computed(() => abilitiesStore.abilities)

const addNewAbility = () => abilitiesStore.addNewAbility()
</script>
