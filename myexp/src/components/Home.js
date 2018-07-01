import React, { Component } from 'react';

import withAuthorization from './withAuthentication';
import './Navigation.css'
//import * as firebase from 'firebase';
import { firebase } from '../firebase/index';
import { auth } from '../firebase/firebase';
import { database } from '../firebase/firebase';

class HomePage extends Component {
  componentDidMount(){
    this.getMessages();
  }
  
  getMessages() {
    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        var userId = auth.currentUser.uid;
        console.log(userId);

        var leadsRef = database.ref('Messages');
        leadsRef.on('value', function (snapshot) {
          snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var keys = Object.keys(childData);
           
            for (var i = 0; i < keys.length; i++) {
              var k = keys[i];
              
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
              document.getElementById("msgs").appendChild(msg);
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
        <div style={{ padding: '2%' }} className="msg" id="msgs">
          <h1>Welcome to your feed!</h1>


        </div>
      </div>
    );
  }

}
  
const authCondition = (authUser) => !!authUser;

export default withAuthorization(HomePage);
//export default HomePage;