import React from 'react';
import './Button.css';

export default props => {

  function concatClasses() {
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';

    return classes;
  }

  return (
    <button className={concatClasses()} onClick={e => props.click && props.click(props.label)}>
      {props.label}
    </button>
  );
};
