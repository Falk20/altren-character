import { Stats } from "@/helpers/constants"
import { defineStore } from "pinia"
import { toRefs } from "vue"
import { useLocalStates } from "@/shared/useLocalStates"

export const useStatsStore = defineStore("statsStore", () => {
  const { stats } = useLocalStates()

  const setStat = (statName: Stats, value: number) => {
    stats.value[statName] = value
  }

  return {
    stats,
    setStat,
  }
})
