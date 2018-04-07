import React, { Component } from 'react';
import { withStateHandlers, compose } from 'recompose';
import { Input, Button } from '../common';
import { emailValidation, passwordValidation } from '../helpers/validation';
import styled from 'styled-components';

class SignupForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onSubmit(event) {
    event.preventDefault();
    // const { email, password } = this.state;
    console.log('this.props', this.props);
  }

  // handleChange({ target: { name, value } }) {
  //   let errors = {};
  //   let error;
  //   const meta = { ...this.state.meta };
  //   this.setState({ [name]: value });
  //
  //   if (name === 'email') {
  //     error = emailValidation(value);
  //   } else {
  //     error = passwordValidation(value);
  //   }
  //
  //   if (error) {
  //     errors = { ...this.state.meta.errors, ...error };
  //     meta.errors = errors;
  //     this.setState({ meta });
  //     console.log('this.state', this.state);
  //   }
  // }

  // handleBlur({ target: { name, value } }) {}

  render() {
    const {
      email,
      password,
      handleBlur,
      handleChange,
      formInvalid
    } = this.props;
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Input
          type="email"
          name="email"
          value={email.value}
          // error={errors.email}
          placeholder="Email"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          type="password"
          name="password"
          value={password.value}
          // error={errors.password}
          placeholder="Password"
          handleChange={handleChange}
          handleBlur={handleBlur}
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

export default compose(
  withStateHandlers(
    {
      formInvalid: false,
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
      handleBlur: props => event => {
        console.log('props', props);
        console.log('event', event);
      },
      handleChange: props => ({ target: { value, name } }) => {
        const update = { ...props[name], value };
        return { [name]: update };
      }
    }
  )
)(SignupForm);
