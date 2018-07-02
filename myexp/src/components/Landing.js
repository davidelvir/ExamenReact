import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes'
import AuthUserContext from './AuthUserContext';

const LandingPage = () =>
  <AuthUserContext.Consumer >
    {authUser => authUser
      ? <LandingPageAuth />
      : <LandingPageNonAuth />
    }
  </AuthUserContext.Consumer>
const LandingPageAuth = () =>
<div style={{ marginLeft: '160px', textAlign: 'center' }}>
  <h1>¡BIENVENIDO A MI EXPERIENCIA!</h1>
</div>

const LandingPageNonAuth = () =>
<div style={{ marginLeft: '160px', textAlign: 'center' }}>
  <h1>¡BIENVENIDO A MI EXPERIENCIA!</h1>
  <h2>¡DEBES HACER LOGIN PRIMERO!</h2>
</div>


export default LandingPage;