import React, { Component } from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import { auth } from '../firebase/firebase';
import * as routes from '../constants/routes';
import { database } from '../firebase/firebase';
import './SignUp.css';

const SignUpPage = ({ history }) =>
    <div style={{marginLeft: '160px'}}>
        <h1>SignUp</h1>
        <SignUpForm history={history} />
    </div>
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    writeUserData(username, email, pass) {

        database.ref('Users/').push({
            [auth.currentUser.uid]: {
                uid: auth.currentUser.uid,
                username: username,
                email: email,
                password: pass,
                mensajesPub: {
                    contenido: "Bienvenido a mi proyecto!"
                },
                mensajesPriv: {
                    contenido: "Bienvenido a mi proyecto!"
                },
                amigos: {
                    null: 0
                }
            },

        });

    }
    onClick = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;
        const {
            history,
        } = this.props;

        auth.createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({ ...INITIAL_STATE }));
                this.writeUserData(username, email, passwordOne);
                history.push(routes.LANDING);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        //var userId = auth.currentUser.uid;
        //this.writeUserData(username,email, passwordOne);
        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (

            <div>
                <ul id="input-list">
                    <li id="input-list-item">
                        <input
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type="text"
                            placeholder="Full Name"
                        />
                    </li>
                    <li id="input-list-item">
                        <input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                    </li>
                    <li id="input-list-item">
                        <input
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                    </li>
                    <li id="input-list-item">
                        <input
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </li>
                </ul>




                <button disabled={isInvalid} type="submit" onClick={this.onClick}>
                    Sign Up
        </button>

                {error && <p>{error.message}</p>}
            </div>
        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>

//export default SignUpPage;
export default withRouter(SignUpPage);
export {
    SignUpForm,
    SignUpLink,
};