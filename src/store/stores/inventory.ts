import { defineStore } from "pinia"
import { computed, ref, toValue, watch } from "vue"

import { inventoryStorageKey } from "@/helpers/constants"
import { IBag, IEquipments, IItemTypes, ItemTypes } from "@/helpers/types"
import { saveState } from "@/helpers/utils"
import { generateState } from "@/helpers/utils/inventory"

export const useInventoryStore = defineStore("inventoryStore", () => {
  const initialState = generateState()

  const wallet = ref(initialState.wallet)
  const bags = ref(initialState.bags)

  const equipments = computed(() =>
    bags.value.reduce<IEquipments>(
      (equipments, bag) => {
        bag.items.forEach((item) => {
          if (item.isEquiped) {
            if (item.type === ItemTypes.armor) {
              equipments.armors.push(item)
            }
            if (item.type === ItemTypes.weapon) {
              equipments.weapons.push(item)
            }
            if (item.type === ItemTypes.projectile) {
              equipments.projectiles.push(item)
            }
            if (item.type === ItemTypes.stackable) {
              equipments.consumables.push(item)
            }
          }
        })

        return equipments
      },
      {
        armors: [],
        weapons: [],
        projectiles: [],
        consumables: [],
      },
    ),
  )

  const setWallet = (value: number) => {
    wallet.value = value
  }

  const addBag = (bag: IBag) => {
    bags.value.push(bag)
  }

  const removeBag = (bag: IBag) => {
    bags.value = bags.value.filter((item) => toValue(item) !== toValue(bag))
  }

  const addItem = (bag: IBag, item: IItemTypes) => {
    bag.items.unshift(item)
  }

  const removeItem = (bag: IBag, item: IItemTypes) => {
    bag.items = bag.items.filter(
      (currItem) => toValue(currItem) !== toValue(item),
    )
  }

  const changeCount = (item: IItemTypes, count: number) => {
    item.count = count < 0 ? 0 : count
  }

  const toggleIsEquiped = (item: IItemTypes) => {
    item.isEquiped = !item.isEquiped
  }

  const switchBag = (item: IItemTypes, from: IBag, to: IBag) => {
    removeItem(from, item)
    addItem(to, item)
  }

  watch(
    [wallet, bags],
    () => {
      saveState(inventoryStorageKey, {
        wallet: wallet.value,
        bags: bags.value,
      })
    },
    { deep: true },
  )

  return {
    wallet,
    bags,
    equipments,
    setWallet,
    addBag,
    removeBag,
    addItem,
    removeItem,
    changeCount,
    toggleIsEquiped,
    switchBag,
  }
})
