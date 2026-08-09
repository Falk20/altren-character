import { Stats } from "@/helpers/constants"
import { useLocalStates } from "@/shared/useLocalStates"
import { defineStore } from "pinia"
import { computed } from "vue"

export const useSkillsStore = defineStore("skillsStore", () => {
  const { skills: storage } = useLocalStates()

  const skills = computed({
    get: () => storage.value.skills,
    set: (newVal) => (storage.value.skills = newVal),
  })

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

  return {
    skills,
    skillPointCount,
    setSkill,
  }
})
