export const emailValidation = value => {
  if (!value) {
    return { email: 'email is required' };
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return { email: 'Invalid email address' };
  }
};

export const passwordValidation = value => {
  if (!value) {
    return { password: 'Password is required' };
  }
  if (value.length < 6) {
    return { password: 'Password much be atleast 6 characters long' };
  }
};
