import inventory from "../inventory";
import status from "../status";
import stats from "../stats";

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
  },
};
