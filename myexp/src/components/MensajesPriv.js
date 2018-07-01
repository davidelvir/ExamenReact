import React, { Component } from 'react';

import { auth } from '../firebase/firebase';
import { database } from '../firebase/firebase';
import { firebase } from '../firebase/index';
class MensajesPriv extends Component {

    componentDidMount() {
        this.getMessages();
    }

    getMessages() {
        firebase.auth.onAuthStateChanged(function (user) {
            if (user) {
                var userId = auth.currentUser.uid;
                console.log(userId);

                var leadsRef = database.ref('PrivateMessages');
                leadsRef.on('value', function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {
                        var childData = childSnapshot.val();
                        var keys = Object.keys(childData);
                        for (var i = 0; i < keys.length; i++) {
                            var k = keys[i];
                            if (childData[k].uid == userId) {
                                var username = childData[k].username;
                                var contenido = childData[k].contenido;
                                console.log(username, contenido);
                                var msg = document.createElement("p");
                                var br = document.createElement("br");
                                var t2 = document.createTextNode(username + " dice: ");
                                var t = document.createTextNode(contenido);
                                msg.appendChild(t2);
                                msg.appendChild(br);
                                msg.appendChild(t);
                                document.getElementById("pm2").appendChild(msg);
                            }

                        }

                    });
                });
                // User is signed in.
            } else {
                console.log("hola")
                //document.getElementById("saludo").innerHTML = 'Not Signed In!';
                // No user is signed in.
            }
        });


    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginLeft: '160px' }}>
                <h1>Estos son tus mensajes privados!</h1>
                <div id="pm2" class="msg"></div>
            </div>
        );
    }
}

export default MensajesPriv;