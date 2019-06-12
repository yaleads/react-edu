import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import { Button, Alert } from 'reactstrap';
import FormikTextInput from 'components/Forms/FormikTextInput';
import FormikCheckbox from 'components/Forms/FormikCheckbox';

const CartForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    { touched && errors.cart && <Alert color="danger">{errors.cart}</Alert>}

    <FormikTextInput name='fullName'  label='Full Name' invalid={errors.fullName && touched.fullName} errorText={errors.fullName}  size='4' />
    <FormikTextInput name='email'     label='Email'     invalid={errors.email && touched.email}       errorText={errors.email}     size='4' type='email' />
    <FormikTextInput name='phone'     label='Phone'     invalid={errors.phone && touched.phone}       errorText={errors.phone}     size='4' />
    <FormikTextInput name='address'   label='Address'   invalid={errors.address && touched.address}   errorText={errors.address}   size='8' />
    <FormikCheckbox name='newsletter' label='Subscribe to our newsletter' checked={values.newsletter} />
    <br />
    <Button disabled={isSubmitting}>Submit</Button>
  </Form>
);

CartForm.propTypes = {
  values:  PropTypes.object,
  errors:  PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
};

export default CartForm;