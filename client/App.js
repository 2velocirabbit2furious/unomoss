/* eslint-disable react/jsx-filename-extension */
import React, { useContext, createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';

// import Login from './components/Login/Login';
import LoginForm from './components/Login/LoginForm.jsx';
import Plant from './components/Plant/Plant';
import Profile from './components/Profile/Profile';
import Greenhouse from './components/Greenhouse/Greenhouse';
import SignupForm from './components/Login/SignupForm';

import SearchPlant from './components/SearchPlant/SearchPlant';
import logo from './assets/logo.png';

import './styles/index.scss';

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <div className="">
          <nav>
            <div className="logo-container">
              <img src={logo} />
            </div>
            <ul>
              <li>
                <Link to="/greenhouse">My Greenhouse</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/login">Login Page</Link>
              </li>
              <li>
                <Link to="/plant">Plant Page</Link>
              </li>
              <li>
                <Link to="/search">SEARCH</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/plant" render={(props) => <Plant {...props} />} />
            <Route path="/search">
              <SearchPlant />
            </Route>
            <PrivateRoute path="/greenhouse">
              <Greenhouse />
            </PrivateRoute>
            <Route path="/signup">
              <SignupForm />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function PrivateRoute({ children }) {
  let auth = useAuth();
  return (
    <Route
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = event => {
    event.preventDefault();
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <LoginForm login={login} />
  );
}


export default App;
