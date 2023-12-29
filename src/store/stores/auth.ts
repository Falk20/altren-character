import { IAuth } from "@/helpers/types";
import { User } from "firebase/auth";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: (): IAuth => ({
    user: null,
  }),

  getters: {
    isAuth: (state) => !!state.user,
  },

  actions: {
    setUser(value: User | null): void {
      this.user = value;
    },
  },
});
