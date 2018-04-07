export default {
  email: value => {
    let error = '';
    if (!value) {
      error = 'email is required';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  },
  password: value => {
    let error = '';
    if (!value) {
      error = 'Password is required';
    }
    if (value.length < 6) {
      error = 'Password much be atleast 6 characters long';
    }
    return error;
  }
};
