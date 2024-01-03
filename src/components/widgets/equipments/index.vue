<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <div class="mx-3">
        <h3 class="mb-2">Экипировка</h3>
        <div v-if="weapons.length">
          <h4 class="mb-2">Оружие</h4>

          <equipment-card
            v-for="(weapon, index) in weapons"
            :key="'weapon' + index"
            :item="weapon"
          />
        </div>
        <div v-if="projectiles.length">
          <h4 class="mb-2">Снаряды</h4>

          <equipment-card
            v-for="(projectile, index) in projectiles"
            :key="'projectile' + index"
            :item="projectile"
          />
        </div>
        <div v-if="consumables.length">
          <h4 class="mb-2">Расходники</h4>

          <equipment-card
            v-for="(consumable, index) in consumables"
            :key="'consumable' + index"
            :item="consumable"
          />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useInventoryStore } from '@/store/stores/inventory';
import { computed } from 'vue';
import EquipmentCard from './equipment-card.vue';

const inventoryStore = useInventoryStore()

const weapons = computed(() => inventoryStore.equipments.weapons)
const projectiles = computed(() => inventoryStore.equipments.projectiles)
const consumables = computed(() => inventoryStore.equipments.consumables)
</script>