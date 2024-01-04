import { defineStore } from "pinia";
import { unref } from "vue";

import { inventoryStorageKey } from "@/helpers/constants";
import {
  IBag,
  IEquipments,
  IInventory,
  IItemTypes,
  ItemTypes,
} from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "@/helpers/utils/inventory";

import store from "..";

export const useInventoryStore = defineStore("inventoryStore", {
  state: (): IInventory => generateState(),

  getters: {
    equipments: (state) => {
      return state.bags.reduce<IEquipments>(
        (equipments, bag) => {
          bag.items.forEach((item) => {
            if (item.isEquiped) {
              if (item.type === ItemTypes.armor) {
                equipments.armors.push(item);
              }
              if (item.type === ItemTypes.weapon) {
                equipments.weapons.push(item);
              }
              if (item.type === ItemTypes.projectile) {
                equipments.projectiles.push(item);
              }
              if (item.type === ItemTypes.stackable) {
                equipments.consumables.push(item);
              }
            }
          });

          return equipments;
        },
        {
          armors: [],
          weapons: [],
          projectiles: [],
          consumables: [],
        },
      );
    },
  },

  actions: {
    setWallet(value: number) {
      this.wallet = value;
    },

    addBag(bag: IBag) {
      this.bags.push(bag);
    },

    removeBag(bag: IBag) {
      this.bags = this.bags.filter((item) => unref(item) !== unref(bag));
    },

    addItem(bag: IBag, item: IItemTypes) {
      bag.items.unshift(item);
    },

    removeItem(bag: IBag, item: IItemTypes) {
      bag.items = bag.items.filter(
        (currItem) => unref(currItem) !== unref(item),
      );
    },

    changeCount(item: IItemTypes, count: number) {
      item.count = count < 0 ? 0 : count;
    },

    toggleIsEquiped(item: IItemTypes) {
      item.isEquiped = !item.isEquiped;
    },

    switchBag(item: IItemTypes, from: IBag, to: IBag) {
      this.removeItem(from, item);
      this.addItem(to, item);
    },
  },
});

useInventoryStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(inventoryStorageKey, store.$state);
  });
});
