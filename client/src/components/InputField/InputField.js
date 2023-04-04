import React from 'react';
import '../InputField/InputField.css';

const InputField = (props) => {
  return (
    <input 
        type={props.type}
        className={props.className}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
    />
  )
}

export default InputField;