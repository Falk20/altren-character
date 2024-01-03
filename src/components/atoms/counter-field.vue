<template>
  <div class="count-field_wrapper text-body-1">
    <span class="count-field_prefix">Кол-во:</span>
    <v-text-field
      class="count-field_input"
      v-model.number="model"
      variant="underlined"
      density="compact"
      inputmode="numeric"
      hide-details
      single-line
      v-maska="mask"
    />
    <div>
      <v-btn
        class="mr-1"
        size="x-small"
        variant="tonal"
        icon="mdi-minus"
        @click="decrement"
      />
      <v-btn
        size="x-small"
        variant="tonal"
        icon="mdi-plus"
        @click="increment"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  modelValue: number,
  label?: string,
  mask?: string | any[]
  maxValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  mask: '####',
  maxValue: 9999,
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

const decrement = () => {
  if (model.value > 0) {
    model.value--
  }
}

const increment = () => {
  if (model.value < props.maxValue) {
    model.value++
  }
}
</script>

<style>
.count-field_wrapper {
  display: grid;
  align-items: center;
  gap: 4px;
  grid-template-columns: min-content minmax(auto, 40px) auto;
}

.count-field_prefix {
  text-wrap: nowrap;
}

.count-field_input {
  widows: 100px;
}

.count-field_wrapper .v-field__input {
  padding-top: 0;
}
</style>
