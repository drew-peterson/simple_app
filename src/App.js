import React, { Component } from 'react';
import styled from 'styled-components';
import SignupForm from './components/SignupForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Get Started</Title>
        <SignupForm />
      </div>
    );
  }
}

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
`;

export default App;
