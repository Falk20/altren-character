import {
  IBag,
  IEquipment,
  IInventory,
  IItemTypes,
  IItemStackeble,
  IProjectile,
} from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "@/helpers/utils/inventory";
import { inventoryStorageKey } from "@/helpers/constants";
import { defineStore } from "pinia";
import store from "..";
import { unref } from "vue";

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
      this.bags = this.bags.filter((item) => unref(item) !== unref(bag));
    },

    addItem(bag: IBag, item: IItemTypes) {
      bag.items.push(item);
    },

    removeItem(bag: IBag, item: IItemTypes) {
      bag.items = bag.items.filter(
        (currItem) => unref(currItem) !== unref(item)
      );
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
