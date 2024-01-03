<template>
  <v-card class="mb-4">
    <v-card-item class="align-start">
      <v-card-title
        class="text-body-1 font-weight-medium text-wrap item-card_title"
        prepend-icon="mdi-arrow-projectile"
      >
        <v-icon
          size="small"
          :icon="icon"
          :color="'green'"
        />
        {{ props.item.title }}
      </v-card-title>
    </v-card-item>

    <v-divider />
    <v-card-text>
      <div class="item-card_custom-field">
        <damage-view
          v-if="props.item.type === ItemTypes.weapon || props.item.type === ItemTypes.projectile"
          :damage="props.item.damage"
        />

        <p
          v-if="props.item.type === ItemTypes.armor"
          class="text-body-1 d-flex align-center"
        >
          <v-icon
            class="mr-1"
            size="small"
            color="teal"
            icon="mdi-shield"
          />
          {{ props.item.protection }}
        </p>

        <counter-field
          v-if="isHaveCount"
          v-model="count"
        />
      </div>

      <v-divider
        v-if="props.item.description"
        class="my-2"
      />


      <p
        v-if="props.item.description"
        class="text-body-1"
      >
        {{ props.item.description }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import counterField from '@/components/atoms/counter-field.vue';
import DamageView from '@/components/atoms/damage-view.vue';
import { IEquipmentTypes, ItemTypes } from '@/helpers/types';
import { useInventoryStore } from '@/store/stores/inventory';
import { computed } from 'vue';

interface Props {
  item: IEquipmentTypes
}

const props = defineProps<Props>()

const inventoryStore = useInventoryStore()

const icon = computed(() => {
  switch (props.item.type) {
    case ItemTypes.armor:
      return 'mdi-tshirt-v'
    case ItemTypes.projectile:
      return 'mdi-arrow-projectile'
    case ItemTypes.weapon:
      return 'mdi-sword'
    case ItemTypes.stackable:
      return 'mdi-animation'
    default:
      return ''
  }
})

const isHaveCount = computed(() => props.item.type === ItemTypes.projectile || props.item.type === ItemTypes.stackable)

const count = computed({
  get: () => props.item?.count ?? 0,
  set: (value: number) => inventoryStore.changeCount(props.item, value),
})
</script>

<style>
.item-card_title.item-card_title {
  line-height: 1.2em;
}

.item-card_custom-field {
  display: flex;
  flex-direction: column;
  gap: 8px
}
</style>