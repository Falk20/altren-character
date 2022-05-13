import { IStatus } from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "./utils";

import {
  defaultHits,
  defaultMana,
  defaultThreshold,
} from "@/helpers/constants";

import { statusStorageKey } from "@/helpers/constants";

export default {
  namespaced: true,

  state: (): IStatus => {
    return generateState();
  },
  getters: {
    isMage(): boolean {
      return true;
    },
    hits(state: IStatus): number {
      return state.hits;
    },
    maxHits(): number {
      return defaultHits;
    },
    mana(state: IStatus): number {
      return state.mana;
    },
    maxMana(): number {
      return defaultMana;
    },
    threshold(): number {
      return defaultThreshold;
    },
    fatigue(state: IStatus): number {
      return state.fatigue;
    },
    conditionHP(state: IStatus): number {
      return state.conditions.HP;
    },
    conditionMP(state: IStatus): number {
      return state.conditions.MP;
    },
    conditionThreshold(state: IStatus): number {
      return state.conditions.threshold;
    },
  },
  mutations: {
    setHits(state: IStatus, value: number) {
      state.hits = value;

      saveState(statusStorageKey, state);
    },
    setMana(state: IStatus, value: number) {
      state.mana = value;

      saveState(statusStorageKey, state);
    },
    setFatigue(state: IStatus, value: number) {
      state.fatigue = value;

      saveState(statusStorageKey, state);
    },
    setConditionHP(state: IStatus, value: number) {
      state.conditions.HP = value;

      saveState(statusStorageKey, state);
    },
    setConditionMP(state: IStatus, value: number) {
      state.conditions.MP = value;

      saveState(statusStorageKey, state);
    },
    setConditionThreshold(state: IStatus, value: number) {
      state.conditions.threshold = value;

      saveState(statusStorageKey, state);
    },
  },
  actions: {},
};
