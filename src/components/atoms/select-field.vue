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

<script setup lang="ts" generic="T">
import { IOption } from "@/helpers/types"
import { computed } from "vue"

export interface Props<T> {
  value: T
  label: string
  items: IOption<T>[]
}

const props = defineProps<Props<T>>()

const emit = defineEmits<{
  "update:value": [value: T]
}>()

const model = computed({
  get: () => props.value,
  set: (value: T) => emit("update:value", value),
})
</script>
