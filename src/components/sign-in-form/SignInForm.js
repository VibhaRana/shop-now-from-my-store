import React, {useState} from 'react'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import './sign-in-form.styles.scss';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
  } from '../../utils/firebase/firebase.utlis.js';

  const defaultFormFields = {
    email: '',
    password: '',
  };
  
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    //Destructure user prop from response we get from signInGooglePopUp method
    const {user} = await signInWithGooglePopup();
    console.log("I am just the user", user)
     createUserDocumentFromAuth(user)
}

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await signInAuthUserWithEmailAndPassword(
      email,
      password
    );
    console.log(response);
    resetFormFields();
  } catch (error) {
    switch (error.code) {
      case 'auth/wrong-password':
        alert('incorrect password for email');
        break;
      case 'auth/user-not-found':
        alert('no user associated with this email');
        break;
      default:
        console.log(error);
    }
  }
};

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
