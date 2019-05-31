import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

const Alert = ({type = 'danger', text = undefined}) => {
  if (text !== undefined) {
    return (
      <UncontrolledAlert color={type}>
        {text}
      </UncontrolledAlert>
    )
  }
  else return null;
};

export default Alert;