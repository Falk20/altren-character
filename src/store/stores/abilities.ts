import { IAbilities, IAbility } from "@/helpers/types";
import { saveState } from "@/helpers/utils";

import { defineStore } from "pinia";
import store from "..";
import { generateState } from "@/helpers/utils/abilities";
import { abilitiesStorageKey } from "@/helpers/constants";
import { unref } from "vue";

export const useAbilitiesStore = defineStore("abilitiesStore", {
  state: (): IAbilities => generateState(),

  actions: {
    addNewAbility() {
      this.abilities.unshift({
        title: "",
        description: "",
      });
    },

    editAbilityTitle(item: IAbility, value: string) {
      item.title = value;
    },

    editAbilityDescription(item: IAbility, value: string) {
      item.description = value;
    },

    removeAbility(item: IAbility) {
      this.abilities = this.abilities.filter(
        (ability) => unref(ability) !== unref(item),
      );
    },
  },
});

useAbilitiesStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(abilitiesStorageKey, store.$state);
  });
});
