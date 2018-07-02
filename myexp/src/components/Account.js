
import React, { Component } from 'react';

import { auth } from '../firebase/firebase';
import { database } from '../firebase/firebase';
class AccountPage extends Component {

  componentDidMount() {
    this.getUserName();
  }
  getUserName() {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        var userId = auth.currentUser.uid;

        var leadsRef = database.ref('Users');
        var name;
        leadsRef.on('value', function (snapshot) {
          snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var keys = Object.keys(childData);
            for (var i = 0; i < keys.length; i++) {
              var k = keys[i];
              if (childData[k].uid == userId) {
                name = childData[k].username;
                console.log("name");
                //var t1 = document.createTextNode(childData[k].username);
                //document.getElementById("NombrePerfilP").appendChild(t1);
                document.getElementById("NombrePerfilP").innerHTML = childData[k].username;
                //document.getElementById("nameLow").innerHTML = childData[k].username;
                document.getElementById("emailP").innerHTML = childData[k].email;
                console.log(name);
                break;
              }
            }

          });
        });
      }
    })

  }
  render() {
    return (
      <section className="intro-section" style={{ marginLeft: '160px' }}>
        <div className="container" style={{
          marginLeft: 'auto', textAlign: 'center', color: 'black', backgroundColor: 'whiteSmoke', marginRight: 'auto',
          marginTop: '100px', width: '450px', height: '250px'
        }}>
          <div className="row">
            <div className="col-md-1 col-lg-2"></div>
            <div className="col-md-10 col-lg-8">
              <div className="intro">
                <br />
                <br />
                
                <h2><b>USERNAME:</b></h2>
                <h2 id="NombrePerfilP"></h2>
                <h2><b>EMAIL:</b></h2>
                <h2 id="emailP"></h2>

              </div>
            </div>
          </div>
        </div>

      </section>
    );

  }
}

export default AccountPage;