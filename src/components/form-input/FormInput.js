import React from 'react'
import './form-input.styles.scss';


// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where 
//zero or more arguments (for function calls) or elements (for array literals) are expected, 
//or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
function FormInput({ label, ...otherProps }) {
  return (
    <div className='group'>
     <input className='form-input' {...otherProps} /> 
    {/* If there is a label give it a dynamic className so that we can apply shrink styling. 
    otherProps.value.length means if user types anything then do the styling of shrink class else
    dont do anything. See styling in styles file*/}
    {label && (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
   
  </div>
  )
}

export default FormInput