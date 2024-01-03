<template>
  <v-sheet
    border
    :elevation="1"
    class="damage-field"
  >
    <div class="damage-field_inputs">
      <SelectField
        v-model:value="value"
        label="Дайс"
        :items="diceOptions"
      />

      <div class="damage-field_modificator">
        <SelectField
          v-model:value="isPositive"
          label="Знак"
          :items="signOptions"
        />

        <v-text-field
          variant="solo"
          density="compact"
          label="Модификатор"
          inputmode="numeric"
          hide-details
          v-model.number="modificator"
          v-maska="'####'"
        />
      </div>
    </div>
    <v-btn
      size="small"
      rounded="0"
      variant="plain"
      color="red"
      icon="mdi-trash-can"
      @click="emit('remove')"
    />
  </v-sheet>
</template>

<script setup lang="ts">
import { signOptions, diceOptions } from "@/helpers/constants";
import SelectField from '@/components/atoms/select-field.vue';
import { IDamage } from '@/helpers/types';
import { computed } from 'vue';
import { VTextField } from "vuetify/lib/components/index.mjs";

interface Props {
  modelValue: IDamage
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: IDamage]
  'remove': []
}>()

const value = computed({
  get: () => props.modelValue.value,
  set: (value: number) => {
    emit('update:modelValue', { ...props.modelValue, value })
  }
})

const modificator = computed({
  get: () => props.modelValue.modificator,
  set: (modificator: number) => {
    emit('update:modelValue', {
      ...props.modelValue,
      modificator: typeof modificator === 'number'
        ? modificator
        : 0
    })
  }
})

const isPositive = computed({
  get: () => props.modelValue.isPositive,
  set: (isPositive: boolean) => {
    emit('update:modelValue', { ...props.modelValue, isPositive })
  }
})
</script>

<style>
.damage-field {
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 12px 0;
  padding: 8px;
}

.damage-field_inputs {
  display: grid;
  gap: 12px
}

.damage-field_modificator {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px
}
</style>