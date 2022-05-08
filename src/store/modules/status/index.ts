import { IStatus } from "@/helpers/types";
import { generateState } from "./utils";

export default {
  namespaced: true,

  state: (): IStatus => {
    return generateState();
  },
  mutations: {},
  actions: {},
  getters: {},
};
