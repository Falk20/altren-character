import {
  abilitiesStorageKey,
  idStorageKey,
  inventoryStorageKey,
  lastKnownCloudUpdatedAtKey,
  notesStorageKey,
  personalInfoStorageKey,
  skillsStorageKey,
  statsStorageKey,
  statusStorageKey,
  updatedAtKey,
} from "@/helpers/constants"
import {
  getDefaultAbilities,
  getDefaultInventory,
  getDefaultNotes,
  getDefaultPersonalInfo,
  getDefaultSkills,
  getDefaultStats,
  getDefaultStatus,
} from "@/helpers/defaults"
import { ICharacter } from "@/helpers/types"
import { useLocalStorage } from "@vueuse/core"

const currentCharlistID = useLocalStorage<string | null>(idStorageKey, null)

const personalInfo = useLocalStorage(
  personalInfoStorageKey,
  getDefaultPersonalInfo(),
)
const status = useLocalStorage(statusStorageKey, getDefaultStatus())
const inventory = useLocalStorage(inventoryStorageKey, getDefaultInventory())
const skills = useLocalStorage(skillsStorageKey, getDefaultSkills())
const notes = useLocalStorage(notesStorageKey, getDefaultNotes())
const abilities = useLocalStorage(abilitiesStorageKey, getDefaultAbilities())
const stats = useLocalStorage(statsStorageKey, getDefaultStats())

const updatedAt = useLocalStorage<number | null>(updatedAtKey, null)
const lastKnownCloudUpdatedAt = useLocalStorage<number | null>(
  lastKnownCloudUpdatedAtKey,
  null,
)

export const useLocalStates = () => {
  const getCurrentCharList = () => ({
    inventory: inventory.value,
    status: status.value,
    stats: stats.value,
    personalInfo: personalInfo.value,
    skills: skills.value,
    notes: notes.value,
    abilities: abilities.value,

    updatedAt: updatedAt.value,
  })

  const setCurrentCharList = (character: ICharacter) => {
    currentCharlistID.value = character.id
    status.value = character.status ?? getDefaultStatus()
    stats.value = character.stats ?? getDefaultStats()
    personalInfo.value = character.personalInfo ?? getDefaultPersonalInfo()
    inventory.value = character.inventory ?? getDefaultInventory()
    skills.value = character.skills ?? getDefaultSkills()
    notes.value = character.notes ?? getDefaultNotes()
    abilities.value = character.abilities ?? getDefaultAbilities()

    updatedAt.value = character.updatedAt ?? null
  }

  const clearCurrentCharList = () => {
    currentCharlistID.value = null
    personalInfo.value = getDefaultPersonalInfo()
    status.value = getDefaultStatus()
    inventory.value = getDefaultInventory()
    skills.value = getDefaultSkills()
    notes.value = getDefaultNotes()
    abilities.value = getDefaultAbilities()
    stats.value = getDefaultStats()

    updatedAt.value = null
    lastKnownCloudUpdatedAt.value = null
  }

  return {
    currentCharlistID,
    inventory,
    status,
    stats,
    personalInfo,
    skills,
    notes,
    abilities,

    updatedAt,
    lastKnownCloudUpdatedAt,

    getCurrentCharList,
    setCurrentCharList,
    clearCurrentCharList,
  }
}
