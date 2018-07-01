import React, { Component } from 'react';
import * as routes from '../constants/routes'
import { doSignOut } from '../firebase/auth';

const SignOutButton = () => 
  <button type="button" onClick={doSignOut}>
    Sign Out
  </button>


//hola
/*class SignOutButton extends Component {
  hola(){
    auth.signOut();
  }
  render(){
    return(
      <button type="button" onClick={this.hola()}></button>
    )
  }
}*/
export default SignOutButton;