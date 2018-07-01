import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes'
import AuthUserContext from './AuthUserContext';
import './Navigation.css';
import { doSignOut } from '../firebase/auth';

const Navigation = () =>
    <AuthUserContext.Consumer >
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <div className="sidenav">
        <a><Link to={routes.HOME}>Feed</Link></a>
        <a><Link to={routes.MESSAGES}>Write Message</Link></a>
        <a><Link to={routes.ACCOUNT}>Account</Link></a>
        <a><Link to={routes.PRIVATE_MESSAGES}>Private Messages</Link></a>
        <a><Link to={routes.LANDING} onClick={doSignOut}>SignOut</Link></a>
        {/*<a><SignOutButton /></a>*/}
    </div>

/*<ul style={{ background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)' }}>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
</ul>*/

const NavigationNonAuth = () =>
    <div className="sidenav">
        <a><Link to={routes.LANDING}>Home</Link></a>

        <a><Link to={routes.SIGN_IN}>Sign In</Link></a>
    </div>


export default Navigation;