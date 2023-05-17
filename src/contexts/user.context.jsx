import { createContext, useState, useEffect } from "react";
import { onAuthStateChangesListener,  createUserDocumentFromAuth} from "../utils/firebase/firebase.utlis"

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

useEffect(() => {
  const unsubscribe = onAuthStateChangesListener((user) => {
    console.log(user)
    // If there is user, create the user document
    if(user){
      createUserDocumentFromAuth(user)
    }else { 
      // Otherwise just set the current user
      setCurrentUser(user)}
   });
  return unsubscribe;
}, [])

  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
