import React from 'react';

import { firebase } from '../firebase/index';
import AuthUserContext from './AuthUserContext';

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        constructor(props) {
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
        }

        render() {
            const { authUser } = this.state;

            return (
                <AuthUserContext.Provider value={authUser}>
                    <Component />
                </AuthUserContext.Provider>
            );
        }

    }
    return WithAuthentication;
}

export default withAuthentication;

//imperativa
/*const numbers = [1, 2, 3, 4];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}
console.log(doubled) //==> [2, 4, 6, 8]

//dclarativa
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled) //==> [2, 4, 6, 8];

//funcion pura
function double(n) {
    return n * 2;
}*/

//impura
/*No tiene argumentos de entrada.
No devuelve ningún valor.
Usa 'this'.
Usa variables globales.*/


/*
map: El resultado conserva la forma del argumento de entrada, probablemente con diferente tipo.
filter: El resultado tendrá la misma forma que el argumento de entrada, probablemente de menor longitud.
reduce: El resultado puede quedar totalmente transformado.*/