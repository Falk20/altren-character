import { saveState } from "@/helpers/utils"
import { generateState } from "@/helpers/utils/personal-info"

import { personalInfoStorageKey } from "@/helpers/constants"
import { defineStore } from "pinia"
import { reactive, toRefs, watch } from "vue"

export const usePersonalInfoStore = defineStore("personalInfo", () => {
  const state = reactive(generateState())

  const setName = (value: string) => {
    state.name = value
  }

  const setKind = (value: string) => {
    state.race = value
  }

  const setIsMage = (value: boolean) => {
    state.isMage = value
  }

  const setIsBasij = (value: boolean) => {
    state.isBasij = value
  }

  const setBasijLevel = (value: number) => {
    state.basijLevel = value
  }

  const setIsBard = (value: boolean) => {
    state.isBard = value
  }

  const setKarma = (value: number) => {
    state.karma = value
  }

  const setFame = (value: number) => {
    state.fame = value
  }

  watch(
    state,
    () => {
      saveState(personalInfoStorageKey, state)
    },
    { deep: true },
  )

  return {
    ...toRefs(state),
    setName,
    setKind,
    setIsMage,
    setIsBasij,
    setBasijLevel,
    setIsBard,
    setKarma,
    setFame,
  }
})
