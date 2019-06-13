import React from 'react';
import { Label, Input, FormFeedback, FormGroup, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const FormikTextInput = ({ type, name, label, invalid, errorText, size }) => {
  if (size)
    return (
      <FormGroup row>
        <Col sm={size}>
          <Label for={name}>{label}</Label>
          <Input
            type={type || 'text'}
            name={name}
            tag={Field}
            invalid={invalid}
          />
          <FormFeedback>{errorText}</FormFeedback>
        </Col>
      </FormGroup>
    );
  else
    return (
      <FormGroup>
        <Label for={name}>{label}</Label>
        <Input
          type={type || 'text'}
          name={name}
          tag={Field}
          invalid={invalid}
        />
        <FormFeedback>{errorText}</FormFeedback>
      </FormGroup>
    );
};

FormikTextInput.propTypes = {
  type:         PropTypes.string,
  name:         PropTypes.string.isRequired,
  label:        PropTypes.string.isRequired,
  invalid:      PropTypes.bool,
  errorText:   PropTypes.string
};

export default FormikTextInput;