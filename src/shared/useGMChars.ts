import { ref, watch, onUnmounted, isRef, type Ref, computed } from "vue"
import { doc, onSnapshot, type Unsubscribe } from "firebase/firestore"
import { ICharacter } from "@/helpers/types"
import { db } from "@/firebase/db"

export function useGMChars(docIds: Ref<string[]>) {
  const charsMap = ref<Map<string, ICharacter>>(new Map())

  const chars = computed((): ICharacter[] => [...charsMap.value.values()])

  const activeSubscriptions = new Map<string, Unsubscribe>()

  const closeSubscription = (id: string): void => {
    const unsub = activeSubscriptions.get(id)
    if (unsub) {
      unsub()
      activeSubscriptions.delete(id)
      charsMap.value.delete(id)
    }
  }

  const syncSubscriptions = (idsArray: string[]): void => {
    for (const activeId of activeSubscriptions.keys()) {
      if (!idsArray.includes(activeId)) {
        closeSubscription(activeId)
      }
    }

    if (idsArray.length === 0) {
      charsMap.value.clear()
      return
    }

    idsArray.forEach((id) => {
      if (!id || activeSubscriptions.has(id)) return

      const docRef = doc(db, "chars", id)

      const unsub = onSnapshot(
        docRef,
        (docSnap) => {
          if (docSnap.exists()) {
            charsMap.value.set(id, {
              id: docSnap.id,
              ...docSnap.data(),
            } as ICharacter)
          } else {
            charsMap.value.delete(id)
          }
        },
        (error) => {
          console.error(`Ошибка подписки на персонажа с ID ${id}:`, error)
        },
      )

      activeSubscriptions.set(id, unsub)
    })
  }

  watch(
    () => docIds.value,
    (newIds) => {
      syncSubscriptions(newIds)
    },
    { immediate: true, deep: true },
  )

  onUnmounted(() => {
    for (const unsub of activeSubscriptions.values()) {
      unsub()
    }
    activeSubscriptions.clear()
  })

  return {
    chars,
  }
}
