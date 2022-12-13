import { IAuth } from "@/helpers/types";
import { User } from "firebase/auth";

export default {
  namespaced: true,

  state: (): IAuth => {
    return {
      user: null,
    };
  },
  getters: {
    isAuth(state: IAuth): boolean {
      return !!state.user;
    },
  },
  mutations: {
    setUser(state: IAuth, value: User | null): void {
      state.user = value;
    },
  },
  actions: {},
};
