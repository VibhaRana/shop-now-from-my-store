import React from 'react'
import './button.styles.scss'

// We have 3 types of button
// 1. Default Button
// 2. Inverted Button
// 3. Google Sign In

// Que- How do we leverage these button types in order to show styling of these 3 different types of button?
//  Ans - Control the styling by a class. So we can have default styling for all the 3 buttons. And we can do this by creating some kind of variable eg BUTTON_TYPES

const BUTTON_TYPE_CLASSES = {
    //  If the value is string name 'google' then we want to render className google-sign-in
    google: 'google-sign-in',
    //  If the value is string name 'inverted' then we want to render className inverted
    inverted: 'inverted',

}
// buttonType is kind of a prop
const Button = ({children, buttonType, ...otherProps}) => {
    console.log("I am ...otherProps", {...otherProps})
    console.log("I am children of Button Component", {children})
    console.log("I am buttonType", {buttonType})
  return (
    <button   className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
    {...otherProps}>
    {/* Render children inside of button component */}
      {children}
    </button>
  )
}

export default Button
