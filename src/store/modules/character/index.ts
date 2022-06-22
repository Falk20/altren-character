import inventory from "../inventory";
import status from "../status";
import stats from "../stats";
import personalInfo from "../personal-info";

export default {
  namespaced: true,

  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {},

  modules: {
    inventory,
    status,
    stats,
    personalInfo,
  },
};
