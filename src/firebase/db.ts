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
} from "firebase/firestore"

import { firebaseApp, auth } from "@/firebase/config"
import { useLocalStates } from "@/shared/useLocalStates"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp)

const { getCurrentCharList, currentCharlistID, clearCurrentCharList } =
  useLocalStates()

export async function saveCharlist() {
  const user = auth.currentUser

  if (user) {
    const charlist = {
      ...getCurrentCharList(),
      owner: user.uid,
    }

    if (currentCharlistID.value) {
      await setDoc(doc(db, "chars", currentCharlistID.value), charlist)
    } else {
      const docRef = await addDoc(collection(db, "chars"), charlist)

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

export async function createCharInDB() {
  const user = auth.currentUser

  if (user) {
    clearCurrentCharList()

    await saveCharlist()
  }
}
