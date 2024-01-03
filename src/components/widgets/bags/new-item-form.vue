<template>
  <v-dialog
    fullscreen
    scrollable
    transition="dialog-top-transition"
    v-model="model"
  >
    <v-card>
      <v-toolbar
        height="48"
        color="primary"
      >
        <v-btn
          icon="mdi-close"
          @click="model = false"
        />
        <v-toolbar-title>Новый предмет</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <SelectField
          class="pb-4"
          v-model:value="itemType"
          label="Тип предмета"
          :items="itemTypeOptions"
        />
        <v-text-field
          ref="titleField"
          class="pb-1"
          variant="solo"
          density="compact"
          label="Название"
          v-model="title"
          :rules="[
            () => !!title || 'Обязательное поле'
          ]"
        />

        <v-textarea
          class="pb-1"
          variant="solo"
          rows="2"
          density="compact"
          label="Описание"
          v-model="description"
        />
        <v-row no-gutters>
          <v-col>
            <v-text-field
              ref="weightField"
              variant="solo"
              density="compact"
              label="Масса"
              inputmode="numeric"
              v-model.number="weight"
              :rules="[
                () => (typeof weight === 'number') || 'Введите число',
                () => weight >= 0 || 'Не меньше 0'
              ]"
            />
          </v-col>
          <v-col
            class="ml-2"
            v-if="isShowCountField"
          >
            <v-text-field
              ref="weightField"
              variant="solo"
              density="compact"
              :label="itemType === ItemTypes.armor ? 'Порог' : 'Кол-во'"
              inputmode="numeric"
              v-model.number="count"
              :rules="[
                () => (typeof count === 'number') || 'Введите число',
              ]"
              v-maska="'####'"
            />
          </v-col>
        </v-row>

        <DamageForm
          v-if="isShowDamageField"
          v-model="damage"
          ref="DamageFormRef"
        />
      </v-card-text>
      <v-card-actions class="px-6 pb-4">
        <v-btn
          prepend-icon="mdi-plus"
          color="primary"
          block
          variant="elevated"
          @click="submit"
        >
          Добавить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import SelectField from "@/components/atoms/select-field.vue";
import { useInventoryStore } from '@/store/stores/inventory';
import { ref, computed } from 'vue';
import { VTextField, VTextarea } from 'vuetify/components';
import { IBag, IDamage, IItemTypes, ItemTypes } from '@/helpers/types';
import { itemTypeOptions } from "@/helpers/constants";
import DamageForm from "./damage-form.vue";

interface Props {
  bag: IBag,
  modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const inventoryStore = useInventoryStore()

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean) => {
    emit('update:modelValue', value)

    if (!value) {
      itemType.value = ItemTypes.nonStackable
      title.value = ''
      description.value = ''
      weight.value = 1
      count.value = 1
      damage.value = []
    }
  }
})

const titleField = ref<InstanceType<typeof VTextField> | null>(null)
const weightField = ref<InstanceType<typeof VTextField> | null>(null)

const itemType = ref<ItemTypes>(ItemTypes.nonStackable)
const title = ref('')
const description = ref('')
const weight = ref(1)
const count = ref(1)
const damage = ref<IDamage[]>([])

const isShowCountField = computed(() => {
  return itemType.value === ItemTypes.stackable
    || itemType.value === ItemTypes.projectile
    || itemType.value === ItemTypes.armor
})
const isShowDamageField = computed(() => {
  return itemType.value === ItemTypes.projectile
    || itemType.value === ItemTypes.weapon
})

const submit = () => {
  titleField.value?.validate()
  weightField.value?.validate()

  if (!!title.value && !!weight.value) {
    let newItem: IItemTypes | null = null

    if (itemType.value === ItemTypes.nonStackable) {
      newItem = {
        title: title.value,
        description: description.value,
        type: itemType.value,
        weight: weight.value
      }

    }

    if (itemType.value === ItemTypes.stackable
      && typeof count.value === 'number') {
      newItem = {
        title: title.value,
        description: description.value,
        type: itemType.value,
        weight: weight.value,
        count: count.value,
        isEquiped: false,
      }
    }

    if (itemType.value == ItemTypes.armor
      && typeof count.value === 'number') {
      newItem = {
        title: title.value,
        description: description.value,
        type: itemType.value,
        weight: weight.value,
        protection: count.value,
        isEquiped: false,
      }
    }

    if (itemType.value === ItemTypes.weapon
      && damage.value.length > 0
      && damage.value.every(item => typeof item.value === 'number')
    ) {
      newItem = {
        title: title.value,
        description: description.value,
        type: itemType.value,
        weight: weight.value,
        damage: damage.value,
        isEquiped: false,
      }
    }

    if (itemType.value === ItemTypes.projectile
      && damage.value.length > 0
      && damage.value.every(item => typeof item.value === 'number')
      && typeof count.value === 'number'
    ) {
      newItem = {
        title: title.value,
        description: description.value,
        type: itemType.value,
        weight: weight.value,
        count: count.value,
        damage: damage.value,
        isEquiped: false,
      }
    }

    if (newItem) {
      inventoryStore.addItem(props.bag, newItem)

      model.value = false
    }
  }
}
</script>
