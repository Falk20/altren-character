<template>
  <v-container class="pa-0">
    <AltScaleField
      v-model:value="model"
      :title="title"
      :maxValue="maxValue"
    />
  </v-container>
</template>

<script setup lang="ts">
import AltScaleField from "@/components/atoms/scale-field.vue";

import { Stats } from "@/helpers/constants";
import { ISkill } from "@/helpers/types";
import { useSkillsStore } from "@/store/stores/skills";
import { computed } from "vue";

export interface Props {
  name: string,
  maxValue?: number,
  statName: Stats,
  skillsDictionary: ISkill[]
}

const props = withDefaults(defineProps<Props>(), {
  maxValue: 6
})

const skillsStore = useSkillsStore()

const model = computed({
  get: () => skillsStore.skills[props.statName][props.name],
  set: (value: number) => skillsStore.setSkill(props.name, value, props.statName)
})

const title = computed(() => props.skillsDictionary.find(
  (skill: ISkill) => skill.value === props.name
)?.title ?? '—')
</script>
