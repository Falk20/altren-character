<template>
  <v-container class="px-0 py-2">
    <h2 class="d-flex justify-center">
      <span>{{ title }}</span>
      <v-btn
        v-if="canAddNewSkill"
        class="ml-2"
        size="small"
        flat
        color="success"
        :icon="btnIcon"
        @click="toggleForm"
      />
    </h2>

    <AltSkillAddingForm
      v-if="isCurrentFormOpen"
      :statName="name"
      :skillsDictionary="filteredSkillsDictionary"
      @close-form="closeForm"
    />

    <template v-if="learnedSkills.length">
      <AltStatField
        v-for="skill in learnedSkills"
        :key="'skill-' + skill"
        :name="skill"
        :maxValue="statLevel"
        :statName="name"
        :skillsDictionary="skillsDictionary"
      />
    </template>
    <p
      class="text-center"
      v-else-if="!isCurrentFormOpen"
    >
      Навыки не изучены
    </p>
  </v-container>
</template>

<script setup lang="ts">
import { ISkill } from "@/helpers/types";
import AltStatField from "./stat-field.vue";
import AltSkillAddingForm from "./adding-form.vue";
import { Stats } from "@/helpers/constants";
import { useStatsStore } from "@/store/stores/stats";
import { useSkillsStore } from "@/store/stores/skills";
import { computed } from "vue";

export interface Props {
  name: Stats,
  title: string,
  skillsDictionary: ISkill[]
  maxSkillPointCount: number
  openedForm: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:openedForm': [value: string | null]
}>()

const statsStore = useStatsStore()
const skillsStore = useSkillsStore()

const isCurrentFormOpen = computed(() => props.openedForm === props.name)

const learnedSkills = computed(() => Object.keys(skillsStore.skills[props.name]))
const filteredSkillsDictionary = computed(() => props.skillsDictionary.filter(
  (skill) => !learnedSkills.value.includes(skill.value)
))

const statLevel = computed(() => statsStore[props.name])
const canAddNewSkill = computed(() => {
  return !!filteredSkillsDictionary.value.length
    && statLevel.value > 0
    && skillsStore.skillPointCount < props.maxSkillPointCount
})

const btnIcon = computed(() => isCurrentFormOpen.value ? "mdi-minus" : "mdi-plus")

const toggleForm = () => {
  emit("update:openedForm", isCurrentFormOpen.value ? null : props.name);
}

const closeForm = () => {
  emit("update:openedForm", null);
}
</script>
