import React, { Component } from 'react';

import { auth } from '../firebase/firebase';
import { database } from '../firebase/firebase';

class Mensajes extends Component {
    onClick = (event) => {
        event.preventDefault();
        var userId = auth.currentUser.uid;
        console.log(userId);
        var contenido = document.getElementById("TAmessages").value;
        window.alert("¡¡Mensaje Enviado!!")
        document.getElementById("TAmessages").innerHTML = " ";
        document.getElementById("TAmessages").innerText = "";
        //var userRef = getUserName();
        //var userId = firebase.auth().currentUser.uid;

        var leadsRef = database.ref('Users');

        var name;
        var pKey;
        leadsRef.on('value', function (snapshot) {

            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                var keys = Object.keys(childData);
                console.log(keys);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    console.log(childData[k]);
                    if (childData[k].uid == userId) {
                        pKey = childSnapshot.key;
                        console.log(pKey);
                        name = childData[k].username;
                        console.log(name);
                        var radios = document.getElementsByName('options');
                        console.log("wtf");
                        console.log(radios[0]);
                        //;

                        if (radios[0].checked) {
                            console.log("ola");
                            console.log(contenido);


                            /*database.ref('Users/').child(pKey).child(userId).child('mensajesPub').push({
                                contenido: contenido
                            });*/
                            database.ref('Messages/').push({
                                [userId]: {
                                    username: name,
                                    contenido: contenido
                                },

                            });
                            break;
                        }
                        if (radios[1].checked) {
                            console.log("ola");
                            console.log(contenido);
                            database.ref('PrivateMessages/').push({
                                [userId]: {
                                    uid: userId,
                                    username: name,
                                    contenido: contenido
                                },

                            });
                            console.log("hola priv");
                            break;
                        }
                        break;
                    }
                }

            });
        });

    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginLeft: '160px' }} id="message">

                <h1 id="saludo"> </h1>
                <h2>Escribe tu mensaje</h2>
                <div>
                    <textarea rows="4" cols="50" id="TAmessages" style={{ color: 'black' }}></textarea>
                </div>
                <div>
                    <button type="submit" id="sendmessage" style={{ color: 'black' }} onClick={this.onClick}>Send Message</button>
                </div>
                <div id='mensajes'>

                </div>
                <div>
                    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
                        <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="1" checked />
                        <span class="mdl-radio__label">Public</span>
                    </label>
                    <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
                        <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="2" />
                        <span class="mdl-radio__label">Private</span>
                    </label>
                    <br />
                </div>
            </div>
        );
    }
}

export default Mensajes;
