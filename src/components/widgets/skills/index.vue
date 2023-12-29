<template>
  <v-container class="pa-0">
    <span :class="[skillPointsRemains < 0 && 'text-red']">{{ skillPointCount }}</span>
    <v-img
      v-if="skillPointsRemains < 0"
      :src="sb"
    />
    <AltSkillsStatSection
      v-for="(stat, name) in statsWithSkills"
      :key="'stat' + name"
      :name="name"
      :title="stat.title"
      :skillsDictionary="stat.skills"
      :maxSkillPointCount="maxSkillPointCount"
      v-model:openedForm="openedForm"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { statsWithSkills } from "@/helpers/constants";
import { getMaxSkillPointCount } from "@/helpers/utils/skills";
import { useSkillsStore } from "@/store/stores/skills";
import { useStatsStore } from "@/store/stores/stats";
import sb from '@/assets/sb.webp'
import AltSkillsStatSection from "./stat-section.vue";

const statsStore = useStatsStore()
const skillsStore = useSkillsStore()

const openedForm = ref<string | null>(null)

const maxSkillPointCount = computed(() => getMaxSkillPointCount(statsStore.intelligence))
const skillPointsRemains = computed(() => maxSkillPointCount.value - skillsStore.skillPointCount)
const skillPointCount = computed(() => `Осталось очков навыков: ${skillPointsRemains.value} / ${maxSkillPointCount.value}`)
</script>