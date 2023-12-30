import { Stats, skillsStorageKey } from "@/helpers/constants";
import { ISkills } from "@/helpers/types";
import { saveState } from "@/helpers/utils";

import { generateState } from "@/helpers/utils/skills";
import { defineStore } from "pinia";
import store from "..";

export const useSkillsStore = defineStore("skillsStore", {
  state: (): ISkills => generateState(),

  getters: {
    skillPointCount: (state): number => {
      const statsArr = Object.values(Stats);

      return statsArr.reduce((total, statName) => {
        const statSkills = Object.keys(state.skills[statName]);

        return (
          total +
          statSkills.reduce((count, skillName) => {
            return count + state.skills[statName][skillName];
          }, 0)
        );
      }, 0);
    },
  },

  actions: {
    setSkill(name: string, level: number, statName: Stats) {
      if (level) {
        this.skills[statName][name] = level;
      } else {
        delete this.skills[statName][name];
      }
    },
  },
});

useSkillsStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(skillsStorageKey, store.$state);
  });
});
