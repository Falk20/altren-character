import { IStatus } from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "./utils";

import {
  defaultHits,
  defaultInspiration,
  defaultMana,
  defaultThreshold,
  humanID,
  malfID,
} from "@/helpers/constants";

import { statusStorageKey } from "@/helpers/constants";

export default {
  namespaced: true,

  state: (): IStatus => {
    return generateState();
  },
  getters: {
    isMage(state: IStatus, getters: any, _: any, rootGetters: any): boolean {
      return rootGetters["character/personalInfo/isMage"];
    },
    isBasij(state: IStatus, getters: any, _: any, rootGetters: any): boolean {
      return rootGetters["character/personalInfo/isBasij"];
    },
    isBard(state: IStatus, getters: any, _: any, rootGetters: any): boolean {
      return rootGetters["character/personalInfo/isBard"];
    },

    isHuman(state: IStatus, getters: any, _: any, rootGetters: any): boolean {
      return rootGetters["character/personalInfo/kind"] === humanID;
    },
    isMalf(state: IStatus, getters: any, _: any, rootGetters: any): boolean {
      return rootGetters["character/personalInfo/kind"] === malfID;
    },

    hits(state: IStatus): number {
      return state.hits;
    },
    maxHits(state: IStatus, getters: any): number {
      const bonusHP = getters.isMalf ? 1 : 0;

      return defaultHits + state.conditions.HP + bonusHP;
    },

    mana(state: IStatus): number {
      return state.mana;
    },
    maxMana(state: IStatus, getters: any, _: any, rootGetters: any): number {
      const conditionMP = state.conditions.MP;

      if (getters.isBasij) {
        const basijLevel = rootGetters["character/personalInfo/basijLevel"];

        return basijLevel + conditionMP;
      }

      if (getters.isMage) {
        const statBuff = rootGetters["character/stats/intelligence"] * 2;
        const manaBuff = getters.isHuman ? statBuff + 1 : statBuff;

        return defaultMana + conditionMP + manaBuff;
      }

      const statBuff = rootGetters["character/stats/endurance"];

      return defaultMana + conditionMP + statBuff;
    },

    inspiration(state: IStatus): number {
      return state.inspiration;
    },
    maxInspiration(
      state: IStatus,
      getters: any,
      _: any,
      rootGetters: any
    ): number {
      const statBuff = rootGetters["character/stats/charisma"];
      return defaultInspiration + statBuff;
    },

    threshold(state: IStatus, _1: any, _2: any, rootGetters: any): number {
      const statBuff = rootGetters["character/stats/endurance"];
      return defaultThreshold + state.conditions.threshold + statBuff;
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
    setInspiration(state: IStatus, value: number) {
      state.inspiration = value;

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
