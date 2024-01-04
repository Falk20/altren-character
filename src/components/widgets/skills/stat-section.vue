<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>

      <template #append>
        <v-btn
          v-if="canAddNewSkill"
          size="small"
          variant="tonal"
          rounded="lg"
          color="green"
          :icon="btnIcon"
          @click="toggleForm"
        />
      </template>
    </v-card-item>

    <v-divider />

    <v-card-text>
      <AltSkillAddingForm
        v-if="isCurrentFormOpen"
        :statName="name"
        :skillsDictionary="filteredSkillsDictionary"
        @close-form="closeForm"
      />

      <v-divider
        v-if="isCurrentFormOpen && learnedSkills.length"
        class="my-4"
      />

      <div
        v-if="learnedSkills.length"
        class="stat-section_skills"
      >
        <AltStatField
          v-for="skill in learnedSkills"
          :key="'skill-' + skill"
          :name="skill"
          :maxValue="statLevel"
          :statName="name"
          :skillsDictionary="skillsDictionary"
        />
      </div>
      <p v-else-if="!isCurrentFormOpen">
        Навыки не изучены
      </p>
    </v-card-text>
  </v-card>
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

<style>
.stat-section_skills {
  display: grid;
  gap: 8px;
}
</style>