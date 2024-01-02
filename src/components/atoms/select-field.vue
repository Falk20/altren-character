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
  value: string | boolean | number,
  label: string,
  items: any[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  "update:value": [value: string | boolean | number]
}>()

const model = computed({
  get: () => props.value,
  set: (value: string | boolean | number) => emit('update:value', value)
})
</script>
