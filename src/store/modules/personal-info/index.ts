import { IPersonalInfo } from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "./utils";

import { personalInfoStorageKey } from "@/helpers/constants";

export default {
  namespaced: true,

  state: (): IPersonalInfo => {
    return generateState();
  },
  getters: {
    name(state: IPersonalInfo): string {
      return state.name;
    },
    kind(state: IPersonalInfo): string {
      return state.race;
    },

    isMage(state: IPersonalInfo): boolean {
      return state.isMage;
    },
    isBasij(state: IPersonalInfo): boolean {
      return state.isBasij;
    },
    basijLevel(state: IPersonalInfo): number {
      return state.basijLevel;
    },
    isBard(state: IPersonalInfo): boolean {
      return state.isBard;
    },
    karma(state: IPersonalInfo): number {
      return state.karma;
    },
    fame(state: IPersonalInfo): number {
      return state.fame;
    },
  },
  mutations: {
    setName(state: IPersonalInfo, value: string): void {
      state.name = value;

      saveState(personalInfoStorageKey, state);
    },
    setKind(state: IPersonalInfo, value: string): void {
      state.race = value;

      saveState(personalInfoStorageKey, state);
    },

    setIsMage(state: IPersonalInfo, value: boolean): void {
      state.isMage = value;

      saveState(personalInfoStorageKey, state);
    },
    setIsBasij(state: IPersonalInfo, value: boolean): void {
      state.isBasij = value;

      saveState(personalInfoStorageKey, state);
    },
    setBasijLevel(state: IPersonalInfo, value: number): void {
      state.basijLevel = value;

      saveState(personalInfoStorageKey, state);
    },
    setIsBard(state: IPersonalInfo, value: boolean): void {
      state.isBard = value;

      saveState(personalInfoStorageKey, state);
    },
    setKarma(state: IPersonalInfo, value: number): void {
      state.karma = value;

      saveState(personalInfoStorageKey, state);
    },
    setFame(state: IPersonalInfo, value: number): void {
      state.fame = value;

      saveState(personalInfoStorageKey, state);
    },
  },
  actions: {},
};
