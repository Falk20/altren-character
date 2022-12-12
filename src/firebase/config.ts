import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
