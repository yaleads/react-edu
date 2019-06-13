import React from 'react';
import { Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const TextInput = ({ type, name, label, placeholder, value, rows, error, onChange }) => (
  <div>
    <Label for={name}>{label || name}</Label>
    <Input
      type={type || 'text'}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={onChange}
      invalid={!!error}
    />
    { !!error && <FormFeedback>{error}</FormFeedback> }

  </div>

);

TextInput.propTypes = {
  type:         PropTypes.string,
  name:         PropTypes.string.isRequired,
  label:        PropTypes.string,
  placeholder:  PropTypes.string,
  value:        PropTypes.string.isRequired,
  rows:         PropTypes.number,
  error:        PropTypes.string,
  onChange:     PropTypes.func,
};

export default TextInput;