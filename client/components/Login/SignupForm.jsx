/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
// import {useForm} from 'react-hook-form';
import {
  BrowserRouter as Redirect,
  Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
// import {values} from 'sequelize/types/lib/operators';
import useSignUp from './useSignUp.jsx';
import './Login.scss';
import validate from './validateInfo.js';
// import {NoEmitOnErrorsPlugin} from 'webpack';

const SignupForm = () => {
  // We must pass in the values(state) and functions we returned from our useSignUp hook function
  const { handleChange, vals, handleSubmit, errors, history } = useSignUp(
    validate
  );
  // const {register, handleSubmit, watch, errors} = useForm();
  // const onSubmit = (data, e) => {
  //   console.log(data);
  //   // Added clear inputs after submitting
  //   // Next, will add either redirect to login, empty greenhouse, or Welcome message
  //   e.target.reset();
  // }

  // I'm just commenting this out for testing... brb
  // let history = useHistory();
  // const handleSubmit = event => {
  //   event.preventDefault();
  // }

  return (
    <div className='login-body'>
      <div>&nbsp;</div>
      <div id='login-box'>
        <form className='form' onSubmit={(e) => handleSubmit(e, history)}>
          <label htmlFor='firstName'>First Name:&nbsp;&nbsp;</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={vals.firstName}
            onChange={handleChange}
            //ref={register}
            //required
          />
          {errors.firstName && <p>{errors.firstName}</p>}
          <br></br>
          <br></br>
          <label htmlFor='lastName'>Last Name:&nbsp;&nbsp;&nbsp;</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={vals.lastName}
            onChange={handleChange}
            //ref={register}
            // required
          />
          {errors.lastName && <p>{errors.lastName}</p>}
          <br></br>
          <br></br>
          <label htmlFor='zipCode'>
            Zip Code:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type='text'
            id='zipCode'
            name='zipCode'
            value={vals.zipCode}
            onChange={handleChange}
            //ref={register}
            // required
          />
          {errors.zipCode && <p>{errors.zipCode}</p>}
          <br></br>
          <br></br>
          <label htmlFor='email'>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type='text'
            id='email'
            name='email'
            value={vals.email}
            onChange={handleChange}
            //ref={register}
            //required
          />
          {errors.email && <p>{errors.email}</p>}
          <br></br>
          <br></br>
          <label htmlFor='username'>User Name:&nbsp;&nbsp;&nbsp;</label>
          <input
            type='text'
            id='username'
            name='username'
            value={vals.username}
            onChange={handleChange}
            //ref={register}
            //required
          />
          {errors.username && <p>{errors.username}</p>}
          <br></br>
          <br></br>
          <label htmlFor='password'>
            Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={vals.password}
            onChange={handleChange}
            //ref={register}
            //required
          />
          {errors.password && <p>{errors.password}</p>}
          {/* Added confirm password */}
          <br></br>
          <br></br>
          <label htmlFor='password2'>Confirm pw:&nbsp;&nbsp;</label>
          <input
            type='password'
            id='password2'
            name='password2'
            value={vals.password2}
            onChange={handleChange}
            //ref={register}
            //required
          />
          {errors.password2 && <p>{errors.password2}</p>}
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;
          <button type='submit' name='btn'>
            {/* ref={register} */}
            SIGN UP
          </button>
          <br></br>
          <br></br>
          {/* Added redirect to login hyperlink */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='form-input-login'>
            {/* Need to add redirect url */}
            Already own an greenhouse? <Link to='/login'>Login</Link>
          </span>
        </form>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};
export default SignupForm;
