<template>
  <v-checkbox
    v-model="model"
    :label="title"
    color="primary"
    hide-details
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  value: boolean,
  title: string,
}

const props = defineProps<Props>()
const emit = defineEmits<{
  "update:value": [value: boolean]
}>()

const model = computed({
  get: () => props.value,
  set: (value: boolean) => emit('update:value', value)
})
</script>

<style>
.v-label {
  opacity: 1;
}
</style>
