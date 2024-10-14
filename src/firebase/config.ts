import { useAuthStore } from "@/store/stores/auth";
import pinia from "@/store";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwm7Sgf-Hk64_VjALFEadEsT4RinaWjtY",
  authDomain: "altren-character.firebaseapp.com",
  projectId: "altren-character",
  storageBucket: "altren-character.appspot.com",
  messagingSenderId: "840081531485",
  appId: "1:840081531485:web:39e407ebec598ea9c7e3b4",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  const credential = await signInWithPopup(auth, provider);

  const authStore = useAuthStore(pinia);

  authStore.setUser(credential.user);
};

export const googleSignOut = async () => {
  try {
    await signOut(auth);

    const authStore = useAuthStore(pinia);

    authStore.setUser(null);
  } catch (error) {
    console.log(error);
  }
};
