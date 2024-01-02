<template>
  <v-card
    class="mb-4"
    :title="props.bag.title"
  >
    <template v-slot:subtitle>
      <span :class="{ 'red': weight > props.bag.capacity }">
        {{ weight }}/{{ props.bag.capacity }}
      </span>
    </template>
    <template v-slot:append>
      <v-btn
        size="30"
        icon="mdi-trash-can"
        variant="plain"
        color="red"
        v-bind="props"
        @click="whenRemoveBtnClick"
      />

      <confirm-dialog
        v-model="isShowRemovingConfrim"
        title="Удалить сумку?"
        text="Все вещи внутри будут утеряны!"
        @confirm="removeBag"
      />
    </template>
    <v-divider></v-divider>
    <v-card-text>
      <v-btn
        block
        prepend-icon="mdi-plus"
        @click="isItemFormOpen = true"
      >
        Предмет
      </v-btn>

      <new-item-form
        v-model="isItemFormOpen"
        :bag="props.bag"
      />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import ConfirmDialog from '@/components/atoms/confirm-dialog.vue';
import { IBag, ItemTypes } from '@/helpers/types';
import { useInventoryStore } from '@/store/stores/inventory';
import { ref } from 'vue';
import NewItemForm from './new-item-form.vue';
import { computed } from 'vue';

interface Props {
  bag: IBag
}

const props = defineProps<Props>()

const inventoryStore = useInventoryStore()

const isItemFormOpen = ref(false)
const isShowRemovingConfrim = ref(false)

const weight = computed(() => props.bag.items.reduce((sum, item) => {
  if (item.type === ItemTypes.stackable || item.type === ItemTypes.projectile) {
    sum += item.weight * item.count

    return sum
  }

  sum += item.weight

  return sum
}, 0))

const whenRemoveBtnClick = () => {
  isShowRemovingConfrim.value = true
}

const removeBag = () => inventoryStore.removeBag(props.bag)
</script>
