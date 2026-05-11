import { User } from "firebase/auth"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null)

  const isAuth = computed(() => !!user.value)

  const setUser = (value: User | null): void => {
    user.value = value
  }

  return {
    user,
    isAuth,
    setUser,
  }
})
