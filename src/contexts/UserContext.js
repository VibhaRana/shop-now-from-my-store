// setup data layer. Its a code snippet.
// We need this to track if the user is signed in or not. If yes, show option of sign out in Navigation
import {createContext, useState} from 'react'

//As the actual value you want to access. This is data layer
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserPovider = ({children}) => {
    const[currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser};
    // For any context we create there is a .Provider. >Provider is a component that will wrap around any other components that need access to value if user data inside
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}