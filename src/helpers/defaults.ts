import { IAbilities, ISkills } from "@/helpers/types"
import { IInventory } from "@/helpers/types"
import { INotes } from "@/helpers/types"
import { IPersonalInfo } from "@/helpers/types"
import { Stats } from "@/helpers/constants"
import { IStatus } from "@/helpers/types"

export const getDefaultAbilities = (): IAbilities => ({
  abilities: [],
})

export const getDefaultInventory = (): IInventory => ({
  wallet: 0,
  bags: [],
})

export const getDefaultNotes = (): INotes => ({
  notes: [],
  quests: [],
})

export const getDefaultPersonalInfo = (): IPersonalInfo => ({
  isMage: false,
  isBasij: false,
  basijLevel: 2,
  isBard: false,
  name: "",
  race: "",
  talents: [],
  mutations: [],
  karma: 0,
  fame: 0,
})

export const getDefaultSkills = (): ISkills => ({
  skills: {
    [Stats.strength]: {},
    [Stats.agility]: {},
    [Stats.intelligence]: {},
    [Stats.charisma]: {},
    [Stats.endurance]: {},
  },
})

export const getDefaultStats = (): Record<Stats, number> => ({
  strength: 0,
  agility: 0,
  intelligence: 0,
  charisma: 0,
  endurance: 0,
})

export const getDefaultStatus = (): IStatus => ({
  hits: 4,
  mana: 5,
  inspiration: 6,

  fatigue: 0,

  conditions: {
    HP: 0,
    MP: 0,
    threshold: 0,
  },
})
