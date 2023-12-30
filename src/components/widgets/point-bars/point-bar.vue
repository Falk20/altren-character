<template>
  <v-row class="pa-0 ma-0 mb-3">
    <v-col class="pa-0">
      <h3 class="ml-3">{{ title }} {{ value }}/{{ maxValue }}</h3>
      <div class="d-flex justify-space-between">
        <v-btn
          variant="text"
          icon="mdi-minus"
          @click="decrement"
        />
        <v-rating
          class="flex-wrap justify-center"
          v-model="model"
          :empty-icon="emptyIcon"
          :full-icon="fullIcon"
          :length="maxValue"
          :color="color"
        />
        <v-btn
          variant="text"
          icon="mdi-plus"
          @click="increment"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  value: number,
  maxValue: number,
  title: string,
  emptyIcon: string,
  fullIcon: string,
  color: string,
}

const props = defineProps<Props>()
const emit = defineEmits<{
  "update:value": [value: number]
}>()

const model = computed({
  get: () => props.value,
  set: (value: number) => emit('update:value', value)
})

const decrement = () => {
  if (model.value > 0) {
    model.value--;
  }
}

const increment = () => {
  if (model.value < props.maxValue) {
    model.value++;
  }
}
</script>
