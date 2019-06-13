import React from 'react';
import { withFormik } from 'formik';
import CartForm from './CartForm';
import * as yup from 'yup';
import { resetCart } from '~/src/actions/Cart';
import {connect} from 'react-redux';

const CartFormContainer = withFormik({
  mapPropsToValues({ cart }) {
    return {
      cart: cart,
      fullName: '',
      phone: '',
      email: '',
      address: '',
      newsletter: false
    };
  },
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === 'test@test.com')
        setErrors({email: 'This email is blocked'});
      else {
        alert(JSON.stringify(values));
        props.resetCart();
        resetForm();
      }

      setSubmitting(false);
    }, 2000);
  },
  validationSchema: yup.object().shape({
    cart: yup.array()
      .min(1, 'Your Cart is Empty'),
    fullName: yup.string()
      .min(3, 'Full Name should be at least 3 characters')
      .required('Full Name field can\'t be empty'),
    phone: yup.string()
      .min(10, 'Phone should be at least 10 characters')
      .required('Phone field can\'t be empty'),
    email: yup.string()
      .email('Wrong email format')
      .required('Email field can\'t be empty'),
    address: yup.string()
      .required('Address field can\'t be empty')
  })


})(CartForm);

export default connect(null, { resetCart })(CartFormContainer);