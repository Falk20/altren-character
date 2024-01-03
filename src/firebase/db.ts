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
} from "firebase/firestore";

import { firebaseApp, auth } from "@/firebase/config";
import { generateCharlist } from "@/helpers/utils";
import { idStorageKey } from "@/helpers/constants";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);
let currentCharlistID = localStorage.getItem(idStorageKey);

export async function saveCharlist() {
  const user = auth.currentUser;

  if (user) {
    const charlist = {
      ...generateCharlist(),
      owner: user.uid,
    };

    if (currentCharlistID) {
      await setDoc(doc(db, "chars", currentCharlistID), charlist, {
        merge: true,
      });
    } else {
      const docRef = await addDoc(collection(db, "chars"), charlist);

      currentCharlistID = docRef.id;
      localStorage.setItem(idStorageKey, docRef.id);
    }

    return;
  } else {
    throw new Error("вы не авторизованы");
  }
}

export async function removeCharList(charlistID: string) {
  await deleteDoc(doc(db, "chars", charlistID));

  if (charlistID === currentCharlistID) {
    localStorage.clear();
    currentCharlistID = null;
    window.location.reload();
  }

  return;
}

export async function getAllChars() {
  const user = auth.currentUser;

  if (user) {
    return getDocs(
      query(collection(db, "chars"), where("owner", "==", user.uid)),
    );
  }

  return null;
}

export async function createCharInDB() {
  const user = auth.currentUser;

  if (user) {
    localStorage.clear();
    currentCharlistID = null;

    await saveCharlist();

    window.location.reload();
  }
}
