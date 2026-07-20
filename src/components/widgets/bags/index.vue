<template>
  <v-container class="px-0 pb-0">
    <draggable
      v-model="bags"
      @start="drag = true"
      @end="drag = false"
      item-key="index"
      handle=".handle-bag"
    >
      <template #item="{ element }">
        <BagPanel :bag="element" />
      </template>
    </draggable>

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
import { ref } from "vue"
import NewBagForm from "./new-bag-form.vue"
import BagPanel from "./bag-panel.vue"
import { useInventoryStore } from "@/store/stores/inventory"
import { computed } from "vue"
import draggable from "vuedraggable"

const drag = ref(false)

const inventoryStore = useInventoryStore()

const isFormOpen = ref(false)

const bags = computed({
  get: () => inventoryStore.bags,
  set: (newVal) => inventoryStore.sortBags(newVal),
})
</script>
