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
        <v-toolbar-title>Новая сумка</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
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
        <v-text-field
          ref="capacityField"
          variant="solo"
          density="compact"
          label="Кол-во ячеек"
          v-model.number="capacity"
          :rules="[
            () => (typeof capacity === 'number') || 'Обязательное поле',
            () => capacity > 0 || 'Минимум 1'
          ]"
          v-maska="'###'"
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
import { useInventoryStore } from '@/store/stores/inventory';
import { ref, computed } from 'vue';
import { VTextField } from 'vuetify/components';

interface Props {
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
      title.value = ''
      capacity.value = 1
    }
  }
})

const titleField = ref<InstanceType<typeof VTextField> | null>(null)
const capacityField = ref<InstanceType<typeof VTextField> | null>(null)

const title = ref('')
const capacity = ref(1)

const submit = () => {
  titleField.value?.validate()
  capacityField.value?.validate()

  if (!!title.value && !!capacity.value) {
    inventoryStore.addBag({
      title: title.value,
      capacity: capacity.value,
      items: []
    })

    model.value = false
  }
}
</script>
