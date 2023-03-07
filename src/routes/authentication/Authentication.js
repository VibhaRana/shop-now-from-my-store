import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utlis'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import './authentication.scss'
import Button from '../../components/button/Button'
import SignInForm from '../../components/sign-in-form/SignInForm'

const Authentication = () => {
    //you can  retrieve the Google provider's OAuth token by calling getRedirectResult when your page loads: Its inbuilt method
    //Use it in a useEffect hook as redirecting to another page unmount the whole application, and no changes will appear on web
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
  }, [])

   
  

    return(
        <div>
            <h1>Sign In Page</h1>
            {/* <Button onClick={logGoogleUser}>Sign In With Google</Button>
            <Button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</Button> */}
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default Authentication