import React from 'react';
import ContactUsForm from './ContactUsForm';
import Helmet from 'react-helmet';

const Contacts = () => (
  <div className='container'>
    <Helmet>
      <title>Contact Page</title>
      <meta name="description" content='Contact Page' />
    </Helmet>

    <h1 className={'mt-3'}>Contact us</h1>
    <hr />

    <ContactUsForm />
  </div>
);

export default Contacts;