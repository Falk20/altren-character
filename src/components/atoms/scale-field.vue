<template>
  <v-row>
    <v-col class="d-flex flex-column align-center">
      <h4 class="mb-2">
        <v-btn
          class="d-inline"
          variant="text"
          icon="mdi-minus"
          @click="decrement"
        />
        <span>{{ title }}</span>
        <v-btn
          class="d-inline"
          variant="text"
          icon="mdi-plus"
          @click="increment"
        />
      </h4>
      <v-rating
        v-model="model"
        :length="maxValue"
      >
        <template v-slot:item="props">
          <v-icon
            :color="props.isFilled ? 'green' : 'grey-lighten-1'"
            size="44"
          >
            {{ getIcon(props.value) }}
          </v-icon>
        </template>
      </v-rating>
    </v-col>
  </v-row>
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

const emit = defineEmits(['update:value'])

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
