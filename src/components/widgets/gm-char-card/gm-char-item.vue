<template>
  <v-card class="ma-2">
    <v-card-item class="align-start">
      <v-card-title
        class="text-body-large font-weight-medium text-wrap"
        prepend-icon="mdi-arrow-projectile"
      >
        <v-icon
          v-if="item.type !== ItemTypes.nonStackable"
          size="small"
          :icon="icon"
          :color="item.isEquiped ? 'green' : ''"
        />
        {{ item.title }}
      </v-card-title>

      <v-card-subtitle
        v-if="item.weight"
        class="d-flex align-center mt-1 pb-0 ga-3"
      >
        <div>
          <v-icon icon="mdi-kettlebell"></v-icon>
          {{ item.weight }}
        </div>

        <damage-view
          v-if="
            item.type === ItemTypes.weapon || item.type === ItemTypes.projectile
          "
          :damage="item.damage"
        />

        <div
          v-if="item.type === ItemTypes.armor"
          class="text-body-1 d-flex align-center"
        >
          <v-icon class="mr-1" size="small" color="teal" icon="mdi-shield" />
          {{ item.protection }}
        </div>

        <p v-if="isHaveCount" class="text-body-1 ma-0">Кол-во: {{ count }}</p>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text v-if="item.description">
      {{ item.description }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import DamageView from "@/components/atoms/damage-view.vue"
import { IItemTypes, ItemTypes } from "@/helpers/types"

import { computed } from "vue"

interface Props {
  item: IItemTypes
}

const { item } = defineProps<Props>()

const icon = computed(() => {
  switch (item.type) {
    case ItemTypes.armor:
      return "mdi-tshirt-v"
    case ItemTypes.projectile:
      return "mdi-arrow-projectile"
    case ItemTypes.weapon:
      return "mdi-sword"
    case ItemTypes.stackable:
      return "mdi-animation"
    default:
      return ""
  }
})

const isHaveCount = computed(
  () => item.type === ItemTypes.projectile || item.type === ItemTypes.stackable,
)

const count = computed(() => item?.count ?? 0)
</script>
