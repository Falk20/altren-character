<template>
  <v-card class="mb-2">
    <template #title>
      {{ bag.title }}
    </template>
    <template #subtitle>
      <span :class="{ red: weight > capacity }">
        ячейки: {{ weight }}/{{ capacity }}
      </span>
    </template>

    <v-divider />

    <gm-char-item
      v-if="bag.items.length"
      v-for="(item, index) in bag.items"
      :key="'item' + index"
      :item="item"
    />
    <p class="px-4" v-else>Пусто</p>
  </v-card>
</template>

<script setup lang="ts">
import { IBag, ItemTypes } from "@/helpers/types"
import { computed } from "vue"
import GmCharItem from "./gm-char-item.vue"

const { bag, mulePower } = defineProps<{
  bag: IBag
  mulePower: number
}>()

const capacity = computed(() => {
  return bag.capacity * (1 + mulePower)
})

const weight = computed(() => {
  const sum = bag.items.reduce((sum, item) => {
    if (
      item.type === ItemTypes.stackable ||
      item.type === ItemTypes.projectile
    ) {
      sum += item.weight * item.count

      return sum
    }

    sum += item.weight

    return sum
  }, 0)

  return sum % 1 ? +sum.toFixed(2) : sum
})
</script>
