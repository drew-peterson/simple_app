import React, { Component } from 'react';
import { Input, Button } from '../common';
import { emailValidation, passwordValidation } from '../helpers/validation';
import styled from 'styled-components';

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    formInvalid: true,
    errors: {
      email: '',
      password: ''
    }
  };

  onSubmit(event) {
    event.preventDefault();
    console.log('state', this.state);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleBlur({ target: { name, value } }) {}

  render() {
    const { email, password, formInvalid, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Input
          type="email"
          name="email"
          value={email}
          error={errors.email}
          placeholder="Email"
          handleChange={this.handleChange.bind(this)}
          handleBlur={this.handleBlur.bind(this)}
        />
        <Input
          type="password"
          name="password"
          value={password}
          error={errors.password}
          placeholder="Password"
          handleChange={this.handleChange.bind(this)}
          handleBlur={this.handleBlur.bind(this)}
          style={{ marginTop: '15px' }}
        />

        <Button
          type="submit"
          disabled={formInvalid}
          style={{ marginTop: '20px', backgroundColor: '#469b60' }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #dadada;
  padding: 20px;
  max-width: 300px;
  border-radius: 10px;
  margin: 0 auto;
`;

export default SignupForm;
