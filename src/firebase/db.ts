import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { firebaseApp, auth } from "@/firebase/config";
// import store from "@/store/index";
import { generateCharlist } from "@/helpers/utils";
import { idStorageKey } from "@/helpers/constants";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);
let charlistID = localStorage.getItem(idStorageKey);

export async function saveCharlist() {
  const user = auth.currentUser;

  if (user) {
    const charlist = {
      ...generateCharlist(),
      owner: user.uid,
    };

    if (charlistID) {
      await setDoc(doc(db, "chars", charlistID), charlist, { merge: true });
    } else {
      const docRef = await addDoc(collection(db, "chars"), charlist);

      charlistID = docRef.id;
      localStorage.setItem(idStorageKey, docRef.id);
    }

    return;
  } else {
    throw new Error("вы не авторизованы");
  }
}

export async function getAllChars() {
  const user = auth.currentUser;

  if (user) {
    return getDocs(
      query(collection(db, "chars"), where("owner", "==", user.uid))
    );
  }

  return null;
}

export async function createCharInDB() {
  const user = auth.currentUser;

  if (user) {
    localStorage.clear();
    charlistID = null;

    await saveCharlist();

    window.location.reload();
  }
}
