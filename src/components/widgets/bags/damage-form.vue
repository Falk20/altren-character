<template>
  <v-sheet>
    <h5>Урон</h5>

    <DamageField
      v-for="(damage, index) in damages"
      :key="'damage' + index"
      ref="damageFieldRef"
      v-model="damages[index]"
      @remove="remove(index)"
    />

    <v-btn
      size="x-small"
      prepend-icon="mdi-plus"
      color="primary"
      @click="addNewDamage"
    >
      Добавить дайс
    </v-btn>
  </v-sheet>
</template>

<script setup lang="ts">
import { IDamage } from '@/helpers/types';
import { computed } from 'vue';
import DamageField from './damage-field.vue';
import { ref } from 'vue';

interface Props {
  modelValue: IDamage[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: IDamage[]]
}>()

const damages = computed({
  get: () => props.modelValue,
  set: (value: IDamage[]) => emit('update:modelValue', value)
})

const damageFieldRef = ref<InstanceType<typeof DamageField>[] | null>(null)

const addNewDamage = () => {
  damages.value.push({
    value: 1,
    isPositive: true,
    modificator: 0,
  })
}

const remove = (index: number) => damages.value.splice(index, 1)

const $validate = () => { damageFieldRef.value?.forEach((item) => item.$validate()) }

defineExpose({
  $validate
})
</script>