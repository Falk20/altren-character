import { ISetSkillPayload, ISkills } from "@/helpers/types";
// import { statsWithSkills } from "@/helpers/constants";

import { generateState } from "./utils";
// import { saveState } from "@/helpers/utils";
// import { skillsStorageKey } from "@/helpers/constants";

export default {
  namespaced: true,

  state: (): ISkills => {
    return generateState();
  },
  getters: {
    skillCount(state: ISkills, getters: any): number {
      const skillsArr = Object.keys(state.skills);
      skillsArr.reduce((count, statKey) => {
        return count + Object.keys(getters.statSkills(statKey)).length;
      }, 0);
      return 0;
    },

    statSkills: (state: ISkills) => (statName: string) => {
      return state.skills[statName];
    },
  },
  mutations: {
    setSkill(state: ISkills, { name, level, statName }: ISetSkillPayload) {
      if (level) {
        state.skills[statName][name] = level;
      } else {
        delete state.skills[statName][name];
      }
    },
  },
  actions: {},
};
