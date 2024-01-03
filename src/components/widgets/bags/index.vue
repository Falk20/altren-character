<template>
  <v-container class="px-0 pb-0">
    <BagPanel
      v-for="bag in bags"
      :key="'bag' + bag.title"
      :bag="bag"
    />

    <v-btn
      prepend-icon="mdi-plus"
      color="primary"
      block
      variant="tonal"
      @click="isFormOpen = true"
    >
      Хранилище
    </v-btn>

    <NewBagForm v-model="isFormOpen" />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NewBagForm from './new-bag-form.vue';
import BagPanel from './bag-panel.vue';
import { useInventoryStore } from '@/store/stores/inventory';
import { computed } from 'vue';

const inventoryStore = useInventoryStore()

const isFormOpen = ref(false)

const bags = computed(() => inventoryStore.bags)
</script>
