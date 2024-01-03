<template>
  <v-card
    class="mb-4"
    :title="props.bag.title"
  >
    <template #subtitle>
      <span :class="{ 'red': weight > capacity }">
        ячейки: {{ weight }}/{{ capacity }}
      </span>
    </template>
    <template #append>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            size="30"
            icon="mdi-dots-horizontal"
            variant="plain"
            v-bind="props"
          />
        </template>

        <v-list>
          <v-list-item
            base-color="red"
            @click="whenRemoveBtnClick"
          >
            Удалить
          </v-list-item>
        </v-list>
      </v-menu>

      <confirm-dialog
        v-model="isShowRemovingConfrim"
        title="Удалить сумку?"
        text="Все вещи внутри будут утеряны!"
        @confirm="removeBag"
      />
    </template>
    <v-divider></v-divider>
    <v-card-text>
      <item-card
        v-for="(item, index) in props.bag.items"
        :key="'bag-item' + index"
        :bag="props.bag"
        :item="item"
      />

      <v-btn
        block
        prepend-icon="mdi-plus"
        variant="tonal"
        color="green"
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
import ItemCard from './item-card.vue';
import { useSkillsStore } from '@/store/stores/skills';

interface Props {
  bag: IBag
}

const props = defineProps<Props>()

const inventoryStore = useInventoryStore()
const skillsStore = useSkillsStore()

const isItemFormOpen = ref(false)
const isShowRemovingConfrim = ref(false)

const weight = computed(() => {
  const sum = props.bag.items.reduce((sum, item) => {
    if (item.type === ItemTypes.stackable || item.type === ItemTypes.projectile) {
      sum += item.weight * item.count

      return sum
    }

    sum += item.weight

    return sum
  }, 0)

  return sum % 1 ? +sum.toFixed(2) : sum
})

const capacity = computed(() => {
  const mulePower = skillsStore.skills.strength?.mulePower ?? 0
  return props.bag.capacity * (1 + mulePower)
})

const whenRemoveBtnClick = () => {
  isShowRemovingConfrim.value = true
}

const removeBag = () => inventoryStore.removeBag(props.bag)
</script>
