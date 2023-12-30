import { IStatus } from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "@/helpers/utils/status";
import {
  defaultHits,
  defaultInspiration,
  defaultMana,
  defaultStepCount,
  defaultThreshold,
  fameLvl2,
  humanID,
  malfID,
  statusStorageKey,
} from "@/helpers/constants";
import { TStatusFieldName, TConditionsFieldName } from "@/helpers/types";
import { defineStore } from "pinia";
import store from "..";

import { useSkillsStore } from "./skills";
import { usePersonalInfoStore } from "./personal-info";
import { useStatsStore } from "./stats";

export const useStatusStore = defineStore("statusStore", {
  state: (): IStatus => generateState(),

  getters: {
    maxHits: (state) => {
      const personalInfoStore = usePersonalInfoStore();
      const skillsStore = useSkillsStore();

      const skillBonus = skillsStore.skills.endurance?.health ?? 0;
      const kindBonus = personalInfoStore.race === malfID ? 1 : 0;
      const bonusHP = skillBonus + kindBonus;

      return defaultHits + state.conditions.HP + bonusHP;
    },

    maxMana: (state) => {
      const personalInfoStore = usePersonalInfoStore();
      const statsStore = useStatsStore();

      const conditionMP = state.conditions.MP;

      if (personalInfoStore.isBasij) {
        return personalInfoStore.basijLevel + conditionMP;
      }

      if (personalInfoStore.isMage) {
        const statBuff = statsStore.intelligence * 2;
        const manaBuff =
          personalInfoStore.race === humanID ? statBuff + 1 : statBuff;

        return defaultMana + conditionMP + manaBuff;
      }

      const statBuff = statsStore.endurance;

      return defaultMana + conditionMP + statBuff;
    },

    maxInspiration: () => {
      const personalInfoStore = usePersonalInfoStore();
      const statsStore = useStatsStore();

      const statBuff = statsStore.charisma;
      const fameModifier = personalInfoStore.fame >= fameLvl2 ? 2 : 1;
      const maxInspiration = (defaultInspiration + statBuff) * fameModifier;

      return maxInspiration;
    },

    threshold: (state) => {
      const statsStore = useStatsStore();

      const statBuff = statsStore.endurance;

      return defaultThreshold + state.conditions.threshold + statBuff;
    },

    stepCount: () => {
      const statsStore = useStatsStore();
      const skillsStore = useSkillsStore();

      const skillBonus = skillsStore.skills.agility?.athletics ?? 0;
      const statBuff = Math.floor(statsStore.agility / 2);

      return defaultStepCount + statBuff + skillBonus;
    },
  },

  actions: {
    setStatusField(key: TStatusFieldName, value: number) {
      this[key] = value;
    },

    setCondiField(key: TConditionsFieldName, value: number) {
      this.conditions[key] = value;
    },
  },
});

useStatusStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(statusStorageKey, store.$state);
  });
});
