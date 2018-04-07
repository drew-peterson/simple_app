import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { Input, Button } from '../common';
import validateForm from '../helpers/validation';
import styled from 'styled-components';

const SignupForm = ({
  email,
  password,
  handleBlur,
  handleChange,
  pristine,
  onSubmit,
  formMessage
}) => (
  <Form onSubmit={onSubmit} noValidate>
    <Input
      type="email"
      name="email"
      input={email}
      required="true"
      placeholder="Email"
      handleChange={handleChange}
      handleBlur={handleBlur}
    />
    <Input
      type="password"
      name="password"
      required="true"
      input={password}
      placeholder="Password"
      handleChange={handleChange}
      handleBlur={handleBlur}
      style={{ marginTop: '15px' }}
    />

    <Button
      type="submit"
      disabled={pristine}
      style={{ marginTop: '20px', backgroundColor: '#469b60' }}
    >
      Submit
    </Button>
    {formMessage && <Success>{formMessage}</Success>}
  </Form>
);

const Success = styled.p`
  color: green;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
`;
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

export default compose(
  withStateHandlers(
    {
      pristine: true,
      formMessage: '',
      email: {
        value: '',
        error: '',
        touched: false
      },
      password: {
        value: '',
        error: '',
        touched: false
      }
    },
    {
      handleBlur: state => ({ target: { name } }) => {
        const update = { ...state[name], touched: true };
        return { [name]: update };
      },
      handleChange: state => ({ target: { value, name } }) => {
        const error = validateForm[name](value);
        const update = { ...state[name], value, error };
        return { [name]: update, pristine: false };
      },
      onSubmit: ({ email, password }) => event => {
        event.preventDefault();
        if (
          validateForm.email(email.value) ||
          validateForm.password(password.value)
        ) {
          return { formMessage: '' };
        } else {
          console.log('SUBMIT FORM');
          return { formMessage: 'Success!', pristine: true };
        }
      }
    }
  )
)(SignupForm);
