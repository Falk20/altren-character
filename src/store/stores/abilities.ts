import { IAbility } from "@/helpers/types"
import { saveState } from "@/helpers/utils"

import { defineStore } from "pinia"
import { generateState } from "@/helpers/utils/abilities"
import { abilitiesStorageKey } from "@/helpers/constants"
import { ref, toValue, watch } from "vue"

export const useAbilitiesStore = defineStore("abilitiesStore", () => {
  const abilities = ref<IAbility[]>(generateState().abilities)

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

  watch(
    abilities,
    () => {
      saveState(abilitiesStorageKey, {
        abilities: abilities.value,
      })
    },
    { deep: true },
  )

  return {
    abilities,
    addNewAbility,
    editAbilityTitle,
    editAbilityDescription,
    removeAbility,
  }
})
