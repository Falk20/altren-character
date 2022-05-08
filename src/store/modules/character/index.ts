import inventory from "../inventory";
import status from "../status";

export default {
  namespaced: true,

  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {},

  modules: {
    inventory,
    status,
  },
};
