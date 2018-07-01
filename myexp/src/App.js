import React, { Component } from 'react';
import Mensajes from './components/Mensajes';
//import { BrowserRouter as Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import MensajesPriv from './components/MensajesPriv';
import { firebase } from './firebase/index';
import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';

class App extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }*/

  render() {

    return (
      <div className="App" >
        <Router>
          <div>
            <Navigation />

            <hr />

            <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact path={routes.PASSWORD_FORGET}
              component={() => <PasswordForgetPage />}
            />
            <Route
              exact path={routes.HOME}
              component={() => <HomePage />}
            />
            <Route
              exact path={routes.ACCOUNT}
              component={() => <AccountPage />}
            />
            <Route
              exact path={routes.MESSAGES}
              component={() => <Mensajes/>}
              />
            <Route
              exact path={routes.PRIVATE_MESSAGES}
              component={()=> <MensajesPriv/>}
            />
          </div>
        </Router>


      </div>
    );
  }
}

export default withAuthentication(App);
