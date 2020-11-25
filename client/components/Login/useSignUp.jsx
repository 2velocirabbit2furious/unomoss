import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

// Built custom useForm (useSignUp) hook to handle the user registration for my own practice and understanding of hooks and how the useState and useForm work
const useSignUp = (validate) => {
  //Here we set up our values, and the function to update the state values
  // first param initializes default state, second param function that updates state values
  const [vals, setVals] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    email: '',
    username: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState('');
  const history = useHistory();
  // create function that will grab the changes of the inputs
  const handleChange = (event) => {
    // destructure
    const { name, value } = event.target;
    // we use the spread operator so we don't override the rest of the values in the state object when name value updates
    setVals({
      ...vals,
      [name]: value,
    });
    console.log(vals);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vals),
    });
    history.push('/greenhouse');
    // try {
    //   const data = await fetch('/signup', {
    //     method: 'POST',
    //     header: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(vals),
    //   })
    //   const value = await data.json();
    // setRedirect(<Redirect to='/greenhouse' />);
    // } catch(err) {
    //   console.log(err)
    // }
    // .then(data => data.json())
    // .then(data => console.log(data))
    // .catch(e => alert(e.message));
  };

  // we must return the values and functions we want to use in other file components
  return {
    handleChange,
    vals,
    handleSubmit,
    errors,
    history,
  };
};

export default useSignUp;
