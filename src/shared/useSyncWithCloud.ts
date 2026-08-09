import { watch } from "vue"
import { debounce } from "vuetify/lib/util/helpers.mjs"
import { useLocalStates } from "./useLocalStates"
import { saveCharlist } from "@/firebase/db"

export const useSyncWithCloud = () => {
  const {
    currentCharlistID,
    inventory,
    status,
    stats,
    personalInfo,
    skills,
    notes,
    abilities,
  } = useLocalStates()

  const sendToCloud = debounce(async () => {
    console.log("save start")
    await saveCharlist()
  }, 2500)

  watch(
    [inventory, status, stats, personalInfo, skills, notes, abilities],
    () => {
      if (!document.hasFocus() || !currentCharlistID.value) return

      sendToCloud()
    },
    { deep: true },
  )
}
