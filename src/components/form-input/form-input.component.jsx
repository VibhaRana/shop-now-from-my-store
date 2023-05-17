import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
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
  );
};

export default FormInput;
