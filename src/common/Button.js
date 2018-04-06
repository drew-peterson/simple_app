import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ children, type, disabled, style }) => {
  return (
    <Btn type={type} disabled={disabled} style={style}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  font-size: 20px;
  padding: 10px;
  background-color: gray;
  color: white;

  &:disabled {
    opacity: 0.5;
  }
`;

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.object
};

export { Button };
