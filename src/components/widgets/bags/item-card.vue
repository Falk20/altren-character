<template>
  <v-card class="mb-4">
    <v-card-item class="align-start">
      <v-card-title
        class="text-body-1 font-weight-medium text-wrap item-card_title"
        prepend-icon="mdi-arrow-projectile"
      >
        <v-icon
          v-if="props.item.type !== ItemTypes.nonStackable"
          size="small"
          :icon="icon"
          :color="props.item.isEquiped ? 'green' : ''"
        />
        {{ props.item.title }}
      </v-card-title>

      <v-card-subtitle
        v-if="props.item.weight"
        class="d-flex align-center mt-1 pb-0"
      >
        <v-icon icon="mdi-kettlebell"></v-icon> {{ props.item.weight }}
      </v-card-subtitle>

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
              v-if="canEquip"
              prepend-icon="mdi-hanger"
              @click="whenEquipBtnClick"
            >
              {{ props.item.isEquiped ? 'Снять' : 'Надеть' }}
            </v-list-item>
            <v-list-item
              v-for="(bag, index) in bagsForSwitch"
              :key="'bag-switch-' + index"
              prepend-icon="mdi-arrow-right-bold"
              @click="switchBag(bag)"
            >
              {{ bag.title }}
            </v-list-item>
            <v-list-item
              base-color="red"
              prepend-icon="mdi-trash-can"
              @click="whenRemoveBtnClick"
            >
              Удалить
            </v-list-item>
          </v-list>
        </v-menu>

        <confirm-dialog
          v-model="isShowRemovingConfrim"
          title="Удалить предмет?"
          @confirm="removeItem"
        />
      </template>
    </v-card-item>

    <v-divider />
    <v-card-text v-if="props.item.type !== ItemTypes.nonStackable || props.item.description">
      <div
        v-if="props.item.type !== ItemTypes.nonStackable"
        class="item-card_custom-field"
      >
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
        v-if="props.item.type !== ItemTypes.nonStackable && props.item.description"
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
import ConfirmDialog from '@/components/atoms/confirm-dialog.vue';
import counterField from '@/components/atoms/counter-field.vue';
import DamageView from '@/components/atoms/damage-view.vue';
import { IBag, IItemTypes, ItemTypes } from '@/helpers/types';
import { useInventoryStore } from '@/store/stores/inventory';
import { unref } from 'vue';
import { computed } from 'vue';
import { ref } from 'vue';

interface Props {
  bag: IBag
  item: IItemTypes
}

const props = defineProps<Props>()

const inventoryStore = useInventoryStore()

const isShowRemovingConfrim = ref(false)

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

const canEquip = computed(() => props.item.type === ItemTypes.projectile
  || props.item.type === ItemTypes.armor
  || props.item.type === ItemTypes.weapon
  || props.item.type === ItemTypes.stackable
)

const isHaveCount = computed(() => props.item.type === ItemTypes.projectile || props.item.type === ItemTypes.stackable)

const count = computed({
  get: () => props.item?.count ?? 0,
  set: (value: number) => inventoryStore.changeCount(props.item, value),
})

const bagsForSwitch = computed(() => inventoryStore.bags.filter((bag) => unref(bag) !== unref(props.bag)))

const switchBag = (bag: IBag) => inventoryStore.switchBag(props.item, props.bag, bag)

const whenEquipBtnClick = () => inventoryStore.toggleIsEquiped(props.item)

const whenRemoveBtnClick = () => {
  isShowRemovingConfrim.value = true
}

const removeItem = () => inventoryStore.removeItem(props.bag, props.item)
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