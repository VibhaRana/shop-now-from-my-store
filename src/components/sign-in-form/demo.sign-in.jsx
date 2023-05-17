// import React, {useState, useContext} from 'react'
// import FormInput from '../form-input/FormInput'
// import Button , { BUTTON_TYPE_CLASSES }from '../button/Button'
// import { UserContext } from '../../contexts/UserContext';
// import './sign-in-form.styles.scss';
// import {
//     signInWithGooglePopup,
//     createUserDocumentFromAuth,
//     signInAuthUserWithEmailAndPassword,
//   } from '../../utils/firebase/firebase.utlis.js';

//   const defaultFormFields = {
//     email: '',
//     password: '',
//   };
  
// const SignInForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormFields);
//   const { email, password } = formFields;

//   const { setCurrentUser } = useContext(UserContext);

//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };

//   const signInWithGoogle = async () => {
//     //Destructure user prop from response we get from signInGooglePopUp method
//     const { user } = await signInWithGooglePopup();
//     console.log("I am just the user", user)
//     //Set current user in context
//     setCurrentUser(user);

//     //Create user document from user object
//     //  createUserDocumentFromAuth(user)
// }

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     const {user} = await signInAuthUserWithEmailAndPassword(
//       email,
//       password
//     );
  
//     resetFormFields();
//     setCurrentUser(user);
//   } catch (error) {
//     switch (error.code) {
//       case 'auth/wrong-password':
//         alert('incorrect password for email');
//         break;
//       case 'auth/user-not-found':
//         alert('no user associated with this email');
//         break;
//       default:
//         console.log(error);
//     }
//   }
// };


// const handleChange = (event) => {
//   const { name, value } = event.target;

//     setFormFields({ ...formFields, [name]: value });
// }

//   return (
//     <div className='sign-up-container'>
//       <h2>Already have an account?</h2>
//       <span>Sign in with your email and password</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label='Email'
//           type='email'
//           required
//           name='email'
//           value={email}
//           onChange={handleChange}
//         />

//         <FormInput
//           label='Password'
//           type='password'
//           required
//           name='password'
//           value={password}
//           onChange={handleChange}
//         />
//         <div className='buttons-container'>
//           <Button type='submit'>Sign In</Button>
//           <Button type='button'  buttonType={ BUTTON_TYPE_CLASSES.google } onClick={signInWithGoogle}>
//             Google sign in
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default SignInForm
