import { defineStore } from "pinia"
import { computed } from "vue"
import { useLocalStates } from "@/shared/useLocalStates"

export const useNotesStore = defineStore("notesStore", () => {
  const { notes: storage } = useLocalStates()

  const notes = computed({
    get: () => storage.value.notes,
    set: (newVal) => (storage.value.notes = newVal),
  })
  const quests = computed({
    get: () => storage.value.quests,
    set: (newVal) => (storage.value.quests = newVal),
  })

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
