import { IInventory } from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "./utils";

import { inventoryStorageKey } from "@/helpers/constants";

export default {
  namespaced: true,

  state: (): IInventory => {
    return generateState();
  },
  getters: {
    wallet(state: IInventory): number {
      return state.wallet;
    },
  },
  mutations: {
    setWallet(state: IInventory, value: number) {
      state.wallet = value;

      saveState(inventoryStorageKey, state);
    },
  },
  actions: {},
};
