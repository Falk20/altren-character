<template>
  <div class="d-flex flex-wrap text-body-1">
    <span class="mr-1">Урон:</span>

    <div
      v-for="(value, key, index) in flatDamage.dices"
      :key="'dice' + key"
    >
      {{ index > 0 ? '+' : '' }}{{ value > 1 ? value : '' }}<v-icon
        color="green"
        :icon="key"
      />
    </div>
    <div v-if="flatDamage.modificator">
      {{ modificatorText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { IDamage } from '@/helpers/types';
import { diceIcons } from '@/helpers/viewConstants';
import { computed } from 'vue';

interface Props {
  damage: IDamage[]
}

const props = defineProps<Props>()


const flatDamage = computed(() => props.damage.reduce<{
  dices: Record<string, number>,
  modificator: number,
}>((acc, curr) => {
  if (curr.value > 0) {
    if (acc.dices[diceIcons[curr.value]]) {
      acc.dices[diceIcons[curr.value]]++
    } else {
      acc.dices[diceIcons[curr.value]] = 1
    }
  }

  acc.modificator = curr.isPositive
    ? acc.modificator + curr.modificator
    : acc.modificator - curr.modificator

  return acc
}, {
  dices: {},
  modificator: 0,
})
)

const modificatorText = computed(() => {
  return flatDamage.value.modificator < 0
    ? flatDamage.value.modificator
    : '+' + flatDamage.value.modificator
})
</script>