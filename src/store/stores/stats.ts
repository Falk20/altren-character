import { generateState } from "@/helpers/utils/stats"
import { saveState } from "@/helpers/utils"
import { Stats, statsStorageKey } from "@/helpers/constants"
import { defineStore } from "pinia"
import { reactive, toRefs, watch } from "vue"

export const useStatsStore = defineStore("statsStore", () => {
  const state = reactive(generateState())

  const setStat = (statName: Stats, value: number) => {
    state[statName] = value
  }

  watch(
    state,
    () => {
      saveState(statsStorageKey, state)
    },
    { deep: true },
  )

  return {
    ...toRefs(state),
    setStat,
  }
})
