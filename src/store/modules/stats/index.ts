import { generateState } from "./utils";
import { saveState } from "@/helpers/utils";
import { statsStorageKey } from "@/helpers/constants";

export default {
  namespaced: true,

  state: (): Record<string, number> => {
    return generateState();
  },
  getters: {
    strength(state: Record<string, number>): number {
      return state.strength;
    },
    agility(state: Record<string, number>): number {
      return state.agility;
    },
    intelligence(state: Record<string, number>): number {
      return state.intelligence;
    },
    charisma(state: Record<string, number>): number {
      return state.charisma;
    },
    endurance(state: Record<string, number>): number {
      return state.endurance;
    },
  },
  mutations: {
    setStat(
      state: Record<string, number>,
      { statName, value }: { statName: string; value: number }
    ) {
      state[statName] = value;

      saveState(statsStorageKey, state);
    },
  },
};
