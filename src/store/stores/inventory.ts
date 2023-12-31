import { IBag, IInventory } from "@/helpers/types";
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
  },
});

useInventoryStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(inventoryStorageKey, store.$state);
  });
});
