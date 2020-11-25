export default function validateInfo(values) {
  let errors = { err: false };

  if (!values.firstName) {
    errors.firstName = 'First name required';
    errors.err = true;
  }

  if (!values.lastName) {
    errors.lastName = 'Last name required';
    errors.err = true;
  }

  if (!values.zipCode) {
    errors.zipCode = 'Zip code required';
    errors.err = true;
  }

  // Added crazy regex that verifies the validity of emails
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
    errors.err = true;
  }

  if (!values.username.trim()) {
    errors.username = 'Username required';
    errors.err = true;
  }

  if (!values.password) {
    errors.password = 'Password is required';
    errors.err = true;
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
    errors.err = true;
  }

  if (!values.password2) {
    errors.password2 = 'Password Confirmation is required';
    errors.err = true;
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
    errors.err = true;
  }
  return errors;
}
