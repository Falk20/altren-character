<template>
  <v-text-field
    v-model="model"
    variant="solo"
    density="compact"
    :label="label"
    hide-details
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  modelValue: string,
  label: string,
}

const props = defineProps<Props>()
const emit = defineEmits<{
  "update:modelValue": [value: string]
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})
</script>
