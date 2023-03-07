import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

//getDoc is used to get the data in the document and setDoc is used to set the data in document
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Fw108_1jEQZmTkRLRFfEH48p2wrOa94",
  authDomain: "shop-now-from-my-store.firebaseapp.com",
  projectId: "shop-now-from-my-store",
  storageBucket: "shop-now-from-my-store.appspot.com",
  messagingSenderId: "363491110444",
  appId: "1:363491110444:web:a09f85ae8b53f0b78ceb89",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Google Authentication Service. Its just syntax of generating google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//Instantiate firestore. Use it to get db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
   //Look at notes.js to find out why we used additional information
  additionalInformation = {}
) => {
      //If we dont receive userAuth than exit
  if (!userAuth) return;


  // Every document in Cloud Firestore is uniquely identified by its location within the database. To refer to the location of data in your code, you can create a reference to it by following code.
  const userDocRef = doc(db, "users", userAuth.uid);
  //A DocumentSnapshot contains data read from a document in your Cloud Firestore database. The data can be extracted with the getData() or get(String) methods.
  const userSnapshot = await getDoc(userDocRef);
  // If user data does not exist
  if (!userSnapshot.exists()) {
    //Create it by destructuring name, email from userAuth parameter which is actually user object.(To check user obj, see console)
    const { displayName, email } = userAuth;
    //Create the date at which new user was created.
    const createdAt = new Date();
    // Promise
    try {
        // wait for above code to complete then - Make changes in data(ref of location where changes are to be made(userDocRef, {what changes are to made in user obj {displayName, email, createdAt}}))
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
   });
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.log('user creation encountered an error', error);
          }
      
    }
    
      console.log('I am the userSnapshot', userSnapshot)
      console.log('I am user auth - ', userAuth)
      console.log('I am userDocRef', userDocRef)
      console.log('I am db', db)
      console.log('I am userAuth.uid', userAuth.uid)
  }
  // If user data does exist, return back its reference to the location where data is stored in firestore
  return userDocRef;
    
};
 
//This method creates new authenticated user with email and password and will give us back some auth object
export const createAuthUserWithEmailAndPassword = async ( email, password) => {
    //If i dont get email or a password, then I wanna exit 
    if(!email || !password)
    return;
    //And what i wanna return if i get email or a password is awaited value from below methods
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const  signInAuthUserWithEmailAndPassword = async(email, password)=> {
  // If no email and password, just return. Don't run this function
  if(!email || !password) return;
  // But if we do want to run this function then ...
  return await signInWithEmailAndPassword(auth, email, password)
}
