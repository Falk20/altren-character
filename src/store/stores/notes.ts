import { saveState } from "@/helpers/utils"
import { generateState } from "@/helpers/utils/notes"
import { notesStorageKey } from "@/helpers/constants"
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useNotesStore = defineStore("notesStore", () => {
  const initialState = generateState()

  const notes = ref(initialState.notes)
  const quests = ref(initialState.quests)

  const addNewNote = () => {
    notes.value.unshift("")
  }

  const editNote = (index: number, value: string) => {
    notes.value[index] = value
  }

  const removeNote = (index: number) => {
    notes.value.splice(index, 1)
  }

  const addNewQuest = () => {
    quests.value.unshift("")
  }

  const editQuest = (index: number, value: string) => {
    quests.value[index] = value
  }

  const removeQuest = (index: number) => {
    quests.value.splice(index, 1)
  }

  watch(
    [notes, quests],
    () => {
      saveState(notesStorageKey, {
        notes: notes.value,
        quests: quests.value,
      })
    },
    { deep: true },
  )

  return {
    notes,
    quests,
    addNewNote,
    editNote,
    removeNote,
    addNewQuest,
    editQuest,
    removeQuest,
  }
})
