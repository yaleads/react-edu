import React from 'react';
import { Label, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import {Field} from 'formik';

const FormikCheckbox = ({ name, label, checked }) => (
  <FormGroup check row>
    <Label check>
      <Field type="checkbox" name={name} checked={checked}/>{' '}
      { label }
    </Label>
  </FormGroup>
);

FormikCheckbox.propTypes = {
  name:         PropTypes.string.isRequired,
  label:        PropTypes.string.isRequired,
  checked:      PropTypes.bool.isRequired,
};

export default FormikCheckbox;