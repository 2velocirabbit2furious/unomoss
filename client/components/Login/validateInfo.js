export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = 'First name required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name required';
  }

  if (!values.zipCode) {
    errors.zipCode = 'Zip code required';
  }

  // Added crazy regex that verifies the validity of emails
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password Confirmation is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}
