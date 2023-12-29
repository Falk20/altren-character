// Utilities
import { defineStore } from "pinia";

export interface IState {
  sideMenu: boolean;
}

export const useAppStore = defineStore("app", {
  state: (): IState => ({
    sideMenu: false,
  }),

  actions: {
    changeSideMenu(value = false) {
      this.sideMenu = value;
    },
    toggleSideMenu() {
      return (this.sideMenu = !this.sideMenu);
    },
  },
});
