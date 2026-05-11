import { Stats, skillsStorageKey } from "@/helpers/constants"
import { saveState } from "@/helpers/utils"

import { generateState } from "@/helpers/utils/skills"
import { defineStore } from "pinia"
import { computed, ref, watch } from "vue"

export const useSkillsStore = defineStore("skillsStore", () => {
  const skills = ref(generateState().skills)

  const skillPointCount = computed(() => {
    const statsArr = Object.values(Stats)

    return statsArr.reduce((total, statName) => {
      const statSkills = Object.keys(skills.value[statName])

      return (
        total +
        statSkills.reduce((count, skillName) => {
          return count + skills.value[statName][skillName]
        }, 0)
      )
    }, 0)
  })

  const setSkill = (name: string, level: number, statName: Stats) => {
    if (level) {
      skills.value[statName][name] = level
    } else {
      delete skills.value[statName][name]
    }
  }

  watch(
    skills,
    () => {
      saveState(skillsStorageKey, {
        skills: skills.value,
      })
    },
    { deep: true },
  )

  return {
    skills,
    skillPointCount,
    setSkill,
  }
})
