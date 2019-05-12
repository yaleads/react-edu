import React from 'react';

const Alert = ({type = 'danger', text = undefined}) => {
  if (text !== undefined) {
    return (
      <div className={`alert alert-${type} alert-dismissible fade show mt-3`} role="alert">
        <strong>Error!</strong> {text}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
  else return null;
};

export default Alert;