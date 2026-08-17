import {
  defaultHits,
  defaultHittingDifficulty,
  defaultInspiration,
  defaultMana,
  defaultStepCount,
  defaultThreshold,
  fameLvl2,
  humanID,
  malfID,
  Stats,
} from "@/helpers/constants"
import { TStatusFieldName, TConditionsFieldName } from "@/helpers/types"
import { defineStore } from "pinia"

import { useSkillsStore } from "./skills"
import { usePersonalInfoStore } from "./personal-info"
import { useStatsStore } from "./stats"
import { useInventoryStore } from "./inventory"
import { computed, toRefs } from "vue"
import { useLocalStates } from "@/shared/useLocalStates"

export const useStatusStore = defineStore("statusStore", () => {
  const personalInfoStore = usePersonalInfoStore()
  const skillsStore = useSkillsStore()
  const statsStore = useStatsStore()
  const inventoryStore = useInventoryStore()

  const { status } = useLocalStates()

  const maxHits = computed(() => {
    const skillBonus = skillsStore.skills.endurance?.health ?? 0
    const kindBonus = personalInfoStore.personalInfo.race === malfID ? 1 : 0
    const bonusHP = skillBonus + kindBonus

    return defaultHits + status.value.conditions.HP + bonusHP
  })

  const maxMana = computed(() => {
    const conditionMP = status.value.conditions.MP

    if (personalInfoStore.personalInfo.isBasij) {
      return personalInfoStore.personalInfo.basijLevel + conditionMP
    }

    if (personalInfoStore.personalInfo.isMage) {
      const statBuff = statsStore.stats[Stats.intelligence] * 2
      const manaBuff =
        personalInfoStore.personalInfo.race === humanID
          ? statBuff + 1
          : statBuff

      return defaultMana + conditionMP + manaBuff
    }

    const statBuff = statsStore.stats[Stats.endurance]

    return defaultMana + conditionMP + statBuff
  })

  const maxInspiration = computed(() => {
    const statBuff = statsStore.stats[Stats.charisma]
    const fameModifier = personalInfoStore.personalInfo.fame >= fameLvl2 ? 2 : 1
    const maxInspiration = (defaultInspiration + statBuff) * fameModifier

    return maxInspiration
  })

  const threshold = computed(() => {
    const statBuff = statsStore.stats[Stats.endurance]
    const equipmentBuff = inventoryStore.equipments.armors.reduce(
      (protection, armor) => protection + armor.protection,
      0,
    )

    return (
      defaultThreshold +
      status.value.conditions.threshold +
      statBuff +
      equipmentBuff
    )
  })

  const stepCount = computed(() => {
    const skillBonus = skillsStore.skills.agility?.athletics ?? 0
    const statBuff = Math.floor(statsStore.stats[Stats.agility] / 2)
    const conditionStepCount = status.value.conditions.stepCount ?? 0

    return defaultStepCount + statBuff + skillBonus + conditionStepCount
  })

  const hittingDifficulty = computed(() => {
    const skillBonus = skillsStore.skills.agility?.evasion ?? 0

    return defaultHittingDifficulty + skillBonus
  })

  const setStatusField = (key: TStatusFieldName, value: number) => {
    status.value[key] = value
  }

  const setCondiField = (key: TConditionsFieldName, value: number) => {
    status.value.conditions[key] = value
  }

  return {
    status,
    maxHits,
    maxMana,
    maxInspiration,
    threshold,
    stepCount,
    hittingDifficulty,
    setStatusField,
    setCondiField,
  }
})
