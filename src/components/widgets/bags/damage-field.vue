<template>
  <v-sheet
    border
    :elevation="1"
    class="damage-field"
  >
    <div class="damage-field_inputs">
      <SelectField
        v-model:value="model.value"
        label="Дайс"
        :items="diceOptions"
      />

      <div class="damage-field_modificator">
        <SelectField
          v-model:value="model.isPositive"
          label="Знак"
          :items="signOptions"
        />

        <v-text-field
          ref="moduficatorField"
          variant="solo"
          density="compact"
          label="Модификатор"
          inputmode="numeric"
          hide-details
          v-model.number="model.modificator"
          :rules="[
            () => (typeof model.value === 'number') || 'Введите число',
            () => model.value >= 0 || 'Не меньше 0'
          ]"
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
import { ref } from "vue";
import { VTextField } from "vuetify/lib/components/index.mjs";

interface Props {
  modelValue: IDamage
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: IDamage]
  'remove': []
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value: IDamage) => emit('update:modelValue', value)
})

const moduficatorField = ref<InstanceType<typeof VTextField> | null>(null)

const $validate = () => { moduficatorField.value?.validate() }

defineExpose({
  $validate
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