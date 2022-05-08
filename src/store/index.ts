import { createStore } from "vuex";

import character from "./modules/character";

export interface IState {
  sideMenu: boolean;
}

export default createStore({
  state(): IState {
    return {
      sideMenu: false,
    };
  },
  getters: {
    sideMenu(state: IState): boolean {
      return state.sideMenu;
    },
  },
  mutations: {
    changeSideMenu(state, value): void {
      state.sideMenu = value;
    },
    toggleSideMenu(state): void {
      state.sideMenu = !state.sideMenu;
    },
  },
  actions: {},
  modules: {
    character,
  },
});
