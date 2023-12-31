import {
  IBag,
  IEquipment,
  IInventory,
  IItem,
  IItemStackeble,
  IProjectile,
} from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "@/helpers/utils/inventory";
import { inventoryStorageKey } from "@/helpers/constants";
import { defineStore } from "pinia";
import store from "..";

export const useInventoryStore = defineStore("inventoryStore", {
  state: (): IInventory => generateState(),

  actions: {
    setWallet(value: number) {
      this.wallet = value;
    },

    addBag(bag: IBag) {
      this.bags.push(bag);
    },

    removeBag(bag: IBag) {
      this.bags.filter((item) => item !== bag);
    },

    addItem(bag: IBag, item: IItem) {
      bag.items.push(item);
    },

    removeItem(bag: IBag, item: IItem) {
      bag.items.filter((currItem) => currItem !== item);
    },

    changeCount(item: IItemStackeble | IProjectile, count: number) {
      item.count = count;
    },

    toggleIsEquiped(item: IEquipment) {
      item.isEquiped = !item.isEquiped;
    },
  },
});

useInventoryStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(inventoryStorageKey, store.$state);
  });
});
