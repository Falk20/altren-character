<template>
  <v-card>
    <v-card-item>
      <v-card-title>
        {{ title }}
        <v-btn
          class="mr-2"
          variant="tonal"
          rounded="lg"
          size="x-small"
          icon="mdi-minus"
          @click="decrement"
        />
        <v-btn
          variant="tonal"
          rounded="lg"
          size="x-small"
          icon="mdi-plus"
          @click="increment"
        />
      </v-card-title>
    </v-card-item>
    <v-card-text>
      <v-rating
        v-model="model"
        :length="6"
      >
        <template v-slot:item="itemProps">
          <v-icon
            :color="itemProps.isFilled ? maxValue >= itemProps.value ? 'green' : 'red' : 'grey-lighten-1'"
            size="44"
          >
            {{ getIcon(itemProps.value) }}
          </v-icon>
        </template>
      </v-rating>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { diceIcons } from '@/helpers/viewConstants'
import { computed } from 'vue';

export interface Props {
  value: number
  title?: string,
  maxValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxValue: 6,
})

const emit = defineEmits<{
  'update:value': [value: number]
}>()

const model = computed({
  get: () => props.value,
  set: (value: number) => emit('update:value', value),
})

const decrement = () => {
  if (props.value > 0) {
    emit('update:value', props.value - 1)
  }
}

const increment = () => {
  if (props.value < props.maxValue) {
    emit('update:value', props.value + 1)
  }
}

const getIcon = (value: number) => diceIcons?.[value] ?? "mdi-dice-d4"
</script>
