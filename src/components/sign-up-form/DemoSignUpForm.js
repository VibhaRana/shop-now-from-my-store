import React, { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlis";
import './sign-up-form.styles.scss'
import FormInput from '../form-input/FormInput'
import Button from '../button/Button'
import {UserContext} from "../../contexts/UserContext"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);
  console.log("hit from signup")

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //First check if password and confirm password matches, only then proceed. Else exit
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    //Now we have made sure password matches, go ahead and create the user. So we will use use try and catch.
    //When we use try to create the firebase user and catch to handle error if we fail to do so.
    try {
      // Use  below commented code to log the response we get
      //Destr user from the response(You will see user when you log the response)
      const { user } = await createAuthUserWithEmailAndPassword(email,password);
      //Here we await until we get user  and then call createUserDocumentFromAuth to generate the document. 
      // Here we will pass user and {displayName} which we expects was filled in formFields
      await createUserDocumentFromAuth(user, { displayName });
      //Clear the signup form fields after user has been created
      resetFormFields();
      //What we are trying below here is pass the value of user to our firebase document
      console.log("Hey I am user obj from signup email password", user);
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user. Email already in use')
      } else {
        console.log("User creation encounetered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    //We want to update just 1 input, so all the other inputs remail same, to do this just spread all the form fields (...formFields)
    //and update the appropriate field by using [] inside the object and the value it should be updated to is the value prop from obj destructured from event.target,
    // use the syntax as shown
    setFormFields({ ...formFields, [name]: value });
    console.log("I am the name", name);
    console.log("I am the value", value);
    console.log("I am event.target", event.target);
    console.log("I am the formFields", formFields);
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
       
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label = 'Email'
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label = 'Password'
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button 
          // buttonType='inverted'
         type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;
