<template>
  <v-text-field
    v-model.number="model"
    variant="solo"
    density="compact"
    inputmode="numeric"
    :label="label"
    hide-details
    v-maska="mask"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  modelValue: number,
  label: string,
  mask?: string | any[]
}

const props = withDefaults(defineProps<Props>(), {
  mask: '####'
})

const emit = defineEmits<{
  "update:modelValue": [value: number | string]
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value: number | string) => {
    emit('update:modelValue', typeof value === 'number' ? value : 0)
  }
})
</script>
