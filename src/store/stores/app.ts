// Utilities
import { defineStore } from "pinia"
import { ref } from "vue"
import { useDisplay } from "vuetify"

export interface IState {
  sideMenu: boolean
}

export const useAppStore = defineStore("app", () => {
  const { mobile } = useDisplay()

  const sideMenu = ref(!mobile.value)

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
