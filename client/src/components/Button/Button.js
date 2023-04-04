import React from 'react';
import '../Button/Button.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
    >
      {props.btnText}
    </button>
  )
}

export default Button;