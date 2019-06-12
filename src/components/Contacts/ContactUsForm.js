import React from 'react';
import { Button, Form, FormGroup, Col } from 'reactstrap';
import { set, assign } from 'lodash/object';
import TextInput from 'components/Forms/TextInput';

class ContactUsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          name: '',
          email: '',
          comment: ''
        },
        errors: {}
      }
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  };

  clearError = (field) => {
    this.setState(
      set(
        assign({}, this.state),
        ['form', 'errors', field],
        ''
      )
    );
  };

  validateLength = (field, value, counter, errorText) => {
    if (value.length < counter)
      this.setState(
        set(
          assign({}, this.state),
          ['form', 'errors', field],
          errorText
        )
      );
  };

  handleChange = (field) => {
    return (e) => {
      const value = e.target.value;

      switch (field) {
        case 'name':
          this.clearError('name');
          this.validateLength('name', value, 3, 'Name is too short');
          break;
        case 'email':
          this.clearError('email');
          this.validateLength('email', value, 3, 'Email is too short');
          break;
      }

      this.setState(
        set(
          assign({}, this.state),
          ['form', 'values', field],
          value
        )
      );
    };
  };

  render() {
    const { name, email, comment } = this.state.form.values;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row>
          <Col sm={5}>
            <TextInput
              name='name'
              label='Name'
              placeholder='Enter your name'
              value={name}
              error={this.state.form.errors.name}
              onChange={this.handleChange('name')}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={5}>
            <TextInput
              type='email'
              name='email'
              label='Email'
              placeholder='Enter your email'
              value={email}
              error={this.state.form.errors.email}
              onChange={this.handleChange('email')}
            />
          </Col>
        </FormGroup>
        <TextInput
          type='textarea'
          rows={4}
          name='comment'
          label='Comment'
          placeholder='Enter your comment'
          value={comment}
          error={this.state.form.errors.comment}
          onChange={this.handleChange('comment')}
        />

        <br />
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default ContactUsForm;