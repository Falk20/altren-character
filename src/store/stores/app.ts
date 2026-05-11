// Utilities
import { defineStore } from "pinia"
import { ref } from "vue"

export interface IState {
  sideMenu: boolean
}

export const useAppStore = defineStore("app", () => {
  const sideMenu = ref(false)

  const changeSideMenu = (value = false) => {
    sideMenu.value = value
  }
  const toggleSideMenu = () => {
    return (sideMenu.value = !sideMenu.value)
  }

  return {
    sideMenu,
    changeSideMenu,
    toggleSideMenu,
  }
})
