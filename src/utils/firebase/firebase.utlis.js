import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk",
//   authDomain: "crwn-clothing-db-98d4d.firebaseapp.com",
//   projectId: "crwn-clothing-db-98d4d",
//   storageBucket: "crwn-clothing-db-98d4d.appspot.com",
//   messagingSenderId: "626766232035",
//   appId: "1:626766232035:web:506621582dab103a4d08d6",
// };
const firebaseConfig = {
  apiKey: "AIzaSyA8Fw108_1jEQZmTkRLRFfEH48p2wrOa94",
  authDomain: "shop-now-from-my-store.firebaseapp.com",
  projectId: "shop-now-from-my-store",
  storageBucket: "shop-now-from-my-store.appspot.com",
  messagingSenderId: "363491110444",
  appId: "1:363491110444:web:a09f85ae8b53f0b78ceb89"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Auth
export const auth = getAuth();


export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
  
  
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Firestore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async () => await signOut(auth);

//Takes callback as argument
export const onAuthStateChangesListener = (callback) => onAuthStateChanged(auth, callback)
