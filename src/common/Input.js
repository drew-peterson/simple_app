import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({
  type,
  placeholder,
  error,
  value,
  name,
  handleChange,
  handleBlur,
  style
}) => {
  return (
    <Field>
      <InputField
        style={style}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <ErrorField>{error}</ErrorField>}
    </Field>
  );
};

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  font-size: 20px;
  padding: 10px;
`;

const ErrorField = styled.p`
  color: red;
  margin-top: 10px;
`;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export { Input };
