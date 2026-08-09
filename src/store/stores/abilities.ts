import { IAbility } from "@/helpers/types"

import { defineStore } from "pinia"
import { computed, toValue } from "vue"
import { useLocalStates } from "@/shared/useLocalStates"

export const useAbilitiesStore = defineStore("abilitiesStore", () => {
  const { abilities: storage } = useLocalStates()

  const abilities = computed({
    get: () => storage.value.abilities,
    set: (newVal) => (storage.value.abilities = newVal),
  })

  const addNewAbility = () => {
    abilities.value.unshift({
      title: "",
      description: "",
    })
  }

  const editAbilityTitle = (item: IAbility, value: string) => {
    item.title = value
  }

  const editAbilityDescription = (item: IAbility, value: string) => {
    item.description = value
  }

  const removeAbility = (item: IAbility) => {
    abilities.value = abilities.value.filter(
      (ability) => toValue(ability) !== toValue(item),
    )
  }

  return {
    abilities,
    addNewAbility,
    editAbilityTitle,
    editAbilityDescription,
    removeAbility,
  }
})
