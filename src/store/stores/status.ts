import { saveState } from "@/helpers/utils"
import { generateState } from "@/helpers/utils/status"
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
  statusStorageKey,
} from "@/helpers/constants"
import { TStatusFieldName, TConditionsFieldName } from "@/helpers/types"
import { defineStore } from "pinia"

import { useSkillsStore } from "./skills"
import { usePersonalInfoStore } from "./personal-info"
import { useStatsStore } from "./stats"
import { useInventoryStore } from "./inventory"
import { computed, reactive, toRefs, watch } from "vue"

export const useStatusStore = defineStore("statusStore", () => {
  const personalInfoStore = usePersonalInfoStore()
  const skillsStore = useSkillsStore()
  const statsStore = useStatsStore()
  const inventoryStore = useInventoryStore()

  const state = reactive(generateState())

  const maxHits = computed(() => {
    const skillBonus = skillsStore.skills.endurance?.health ?? 0
    const kindBonus = personalInfoStore.race === malfID ? 1 : 0
    const bonusHP = skillBonus + kindBonus

    return defaultHits + state.conditions.HP + bonusHP
  })

  const maxMana = computed(() => {
    const conditionMP = state.conditions.MP

    if (personalInfoStore.isBasij) {
      return personalInfoStore.basijLevel + conditionMP
    }

    if (personalInfoStore.isMage) {
      const statBuff = statsStore.intelligence * 2
      const manaBuff =
        personalInfoStore.race === humanID ? statBuff + 1 : statBuff

      return defaultMana + conditionMP + manaBuff
    }

    const statBuff = statsStore.endurance

    return defaultMana + conditionMP + statBuff
  })

  const maxInspiration = computed(() => {
    const statBuff = statsStore.charisma
    const fameModifier = personalInfoStore.fame >= fameLvl2 ? 2 : 1
    const maxInspiration = (defaultInspiration + statBuff) * fameModifier

    return maxInspiration
  })

  const threshold = computed(() => {
    const statBuff = statsStore.endurance
    const equipmentBuff = inventoryStore.equipments.armors.reduce(
      (protection, armor) => protection + armor.protection,
      0,
    )

    return (
      defaultThreshold + state.conditions.threshold + statBuff + equipmentBuff
    )
  })

  const stepCount = computed(() => {
    const skillBonus = skillsStore.skills.agility?.athletics ?? 0
    const statBuff = Math.floor(statsStore.agility / 2)

    return defaultStepCount + statBuff + skillBonus
  })

  const hittingDifficulty = computed(() => {
    const skillBonus = skillsStore.skills.agility?.evasion ?? 0

    return defaultHittingDifficulty + skillBonus
  })

  const setStatusField = (key: TStatusFieldName, value: number) => {
    state[key] = value
  }

  const setCondiField = (key: TConditionsFieldName, value: number) => {
    state.conditions[key] = value
  }

  watch(
    state,
    () => {
      saveState(statusStorageKey, state)
    },
    { deep: true },
  )

  return {
    ...toRefs(state),
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
