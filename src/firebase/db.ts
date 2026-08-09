import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  runTransaction,
  getDoc,
} from "firebase/firestore"

import { firebaseApp, auth } from "@/firebase/config"
import { useLocalStates } from "@/shared/useLocalStates"
import { ICharacter } from "@/helpers/types"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp)

const {
  getCurrentCharList,
  currentCharlistID,
  clearCurrentCharList,
  setCurrentCharList,

  updatedAt,
  lastKnownCloudUpdatedAt,
} = useLocalStates()

export async function saveCharlist() {
  const user = auth.currentUser

  if (user) {
    const currentCharlist = {
      ...getCurrentCharList(),
      owner: user.uid,
    }

    if (currentCharlistID.value) {
      const docRef = doc(db, "chars", currentCharlistID.value)

      await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(docRef)
        if (!sfDoc.exists()) throw "Документ не существует!"

        const cloudCharlist = {
          ...sfDoc.data(),
          id: sfDoc.id,
        } as ICharacter

        const now = Date.now()

        if (
          cloudCharlist.updatedAt &&
          (!lastKnownCloudUpdatedAt.value ||
            cloudCharlist.updatedAt > lastKnownCloudUpdatedAt.value)
        ) {
          alert(
            "Конфликт данных! На другом устройстве внесены более свежие изменения. Страница будет обновлена.",
          )
          setCurrentCharList(cloudCharlist)
        } else {
          transaction.update(docRef, {
            ...currentCharlist,
            updatedAt: now,
          })
        }

        updatedAt.value = now
        lastKnownCloudUpdatedAt.value = now
      })
    } else {
      const docRef = await addDoc(collection(db, "chars"), currentCharlist)

      currentCharlistID.value = docRef.id
    }

    return
  } else {
    throw new Error("вы не авторизованы")
  }
}

export async function removeCharList(charlistID: string) {
  await deleteDoc(doc(db, "chars", charlistID))

  if (charlistID === currentCharlistID.value) {
    clearCurrentCharList()
  }

  return
}

export async function getAllChars() {
  const user = auth.currentUser

  if (user) {
    return getDocs(
      query(collection(db, "chars"), where("owner", "==", user.uid)),
    )
  }

  return null
}

export async function getCurrentCharFromCloud() {
  const user = auth.currentUser

  if (user && currentCharlistID.value) {
    const findedDoc = await getDoc(doc(db, "chars", currentCharlistID.value))

    const charlistFromCloud = findedDoc.data()

    if (charlistFromCloud) {
      setCurrentCharList({
        ...charlistFromCloud,
        id: findedDoc.id,
      } as ICharacter)
    }
  }

  return null
}

export async function createCharInDB() {
  const user = auth.currentUser

  if (user) {
    clearCurrentCharList()

    await saveCharlist()
  }
}
