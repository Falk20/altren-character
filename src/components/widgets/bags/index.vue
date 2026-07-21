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
        <BagPanel :bag="element" @start-edit="() => handleEditBag(element)" />
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

    <NewBagForm
      v-model="isFormOpen"
      :editing-bag="editingBag"
      @stop-editing="() => (editingBag = null)"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import NewBagForm from "./new-bag-form.vue"
import BagPanel from "./bag-panel.vue"
import { useInventoryStore } from "@/store/stores/inventory"
import { computed } from "vue"
import draggable from "vuedraggable"
import { IBag } from "@/helpers/types.js"

const drag = ref(false)

const inventoryStore = useInventoryStore()

const isFormOpen = ref(false)
const editingBag = ref<IBag | null>(null)

const handleEditBag = (bag: IBag) => {
  editingBag.value = bag
  isFormOpen.value = true
}

const bags = computed({
  get: () => inventoryStore.bags,
  set: (newVal) => inventoryStore.sortBags(newVal),
})
</script>
