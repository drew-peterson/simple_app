import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({
  type,
  placeholder,
  input: { value, error, touched },
  name,
  handleChange,
  handleBlur,
  style,
  required
}) => (
  <Field>
    <InputField
      className={error && touched ? 'error' : ''}
      style={style}
      error={error}
      touched={touched}
      required={required}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete="off"
    />
    {error && touched && <ErrorField>{error}</ErrorField>}
  </Field>
);

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  font-size: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid: #dadada;

  &.error {
    border: 1px solid red;
  }
`;

const ErrorField = styled.p`
  color: red;
  margin-top: 5px;
`;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  style: PropTypes.object
};

export { Input };
