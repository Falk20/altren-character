import { generateState } from "@/helpers/utils/stats";
import { saveState } from "@/helpers/utils";
import { Stats, statsStorageKey } from "@/helpers/constants";
import { defineStore } from "pinia";
import store from "..";

export const useStatsStore = defineStore("statsStore", {
  state: (): Record<Stats, number> => generateState(),

  actions: {
    setStat(statName: Stats, value: number) {
      this[statName] = value;
    },
  },
});

useStatsStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(statsStorageKey, store.$state);
  });
});
