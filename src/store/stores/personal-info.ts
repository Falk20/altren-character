import { defineStore } from "pinia"
import { computed, reactive, toRefs } from "vue"
import { useLocalStates } from "@/shared/useLocalStates"

export const usePersonalInfoStore = defineStore("personalInfo", () => {
  const { personalInfo } = useLocalStates()

  const setName = (value: string) => {
    personalInfo.value.name = value
  }

  const setKind = (value: string) => {
    personalInfo.value.race = value
  }

  const setIsMage = (value: boolean) => {
    personalInfo.value.isMage = value
  }

  const setIsBasij = (value: boolean) => {
    personalInfo.value.isBasij = value
  }

  const setBasijLevel = (value: number) => {
    personalInfo.value.basijLevel = value
  }

  const setIsBard = (value: boolean) => {
    personalInfo.value.isBard = value
  }

  const setKarma = (value: number) => {
    personalInfo.value.karma = value
  }

  const setFame = (value: number) => {
    personalInfo.value.fame = value
  }

  return {
    personalInfo,
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
