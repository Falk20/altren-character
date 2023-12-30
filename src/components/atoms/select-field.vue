<template>
  <v-select
    v-model="model"
    :items="items"
    variant="solo"
    density="compact"
    :label="label"
    hide-details
  ></v-select>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  value: string,
  label: string,
  items: any[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  "update:value": [value: string]
}>()

const model = computed({
  get: () => props.value,
  set: (value: string) => emit('update:value', value)
})
</script>
