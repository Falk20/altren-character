import { defineStore } from "pinia"
import { computed, toValue } from "vue"

import { IBag, IEquipments, IItemTypes, ItemTypes } from "@/helpers/types"
import { useLocalStates } from "@/shared/useLocalStates"

export const useInventoryStore = defineStore("inventoryStore", () => {
  const { inventory } = useLocalStates()

  const wallet = computed({
    get: () => inventory.value.wallet,
    set: (newVal) => (inventory.value.wallet = newVal),
  })
  const bags = computed({
    get: () => inventory.value.bags,
    set: (newVal) => (inventory.value.bags = newVal),
  })

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

  const editBag = (bag: IBag, title: string, capacity: number) => {
    bag.title = title
    bag.capacity = capacity
  }

  const sortBags = (sortedBags: IBag[]) => {
    bags.value = sortedBags
  }

  const removeBag = (bag: IBag) => {
    bags.value = bags.value.filter((item) => toValue(item) !== toValue(bag))
  }

  const addItem = (bag: IBag, item: IItemTypes) => {
    bag.items.unshift(item)
  }

  const changeItem = (
    bag: IBag,
    currentItem: IItemTypes,
    newItem: IItemTypes,
  ) => {
    bag.items = bag.items.map((item) =>
      toValue(item) === toValue(currentItem) ? newItem : item,
    )
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

  const changeBagSort = (bag: IBag, items: IItemTypes[]) => {
    bag.items = items
  }

  return {
    wallet,
    bags,
    equipments,
    setWallet,
    addBag,
    editBag,
    sortBags,
    removeBag,
    addItem,
    changeItem,
    removeItem,
    changeCount,
    toggleIsEquiped,
    switchBag,
    changeBagSort,
  }
})
