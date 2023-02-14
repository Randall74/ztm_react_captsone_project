import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAhn6t2WtVyTMKKrxuA5MvvyNAlYi_E3g",
  authDomain: "crwn-clothing-db-3e2b7.firebaseapp.com",
  projectId: "crwn-clothing-db-3e2b7",
  storageBucket: "crwn-clothing-db-3e2b7.appspot.com",
  messagingSenderId: "135051366022",
  appId: "1:135051366022:web:8244a667f348112e1d0b07",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
