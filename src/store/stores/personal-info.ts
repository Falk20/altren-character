import { IPersonalInfo } from "@/helpers/types";
import { saveState } from "@/helpers/utils";
import { generateState } from "@/helpers/utils/personal-info";

import { personalInfoStorageKey } from "@/helpers/constants";
import { defineStore } from "pinia";
import store from "..";

export const usePersonalInfoStore = defineStore("personalInfo", {
  state: (): IPersonalInfo => generateState(),

  actions: {
    setName(value: string) {
      this.name = value;
    },

    setKind(value: string) {
      this.race = value;
    },

    setIsMage(value: boolean) {
      this.isMage = value;
    },

    setIsBasij(value: boolean) {
      this.isBasij = value;
    },

    setBasijLevel(value: number) {
      this.basijLevel = value;
    },

    setIsBard(value: boolean) {
      this.isBard = value;
    },

    setKarma(value: number) {
      this.karma = value;
    },

    setFame(value: number) {
      this.fame = value;
    },
  },
});

usePersonalInfoStore(store).$onAction(({ after, store }) => {
  after(() => {
    saveState(personalInfoStorageKey, store.$state);
  });
});
