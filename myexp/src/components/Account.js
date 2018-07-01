
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
                document.getElementById("NombrePerfilP").innerHTML = childData[k].username;
                document.getElementById("nameLow").innerHTML = childData[k].username;
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
      <div id="profil" style={{ marginLeft: '160px', marginTop: ' 160px' }} >
        <div className="container" style={{ color: '#a50e72' }}>
          <div className="row">
            <div className="col-md-7 ">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>Perfil de Usuario</h4>
                </div>
                <div className="panel-body">
                  <div className="box box-info">
                    <div className="box-body">

                      <div className="col-sm-6" style={{ color: '#a50e72' }}>
                        <h4 id="NombrePerfilP"></h4>

                      </div>
                      <div className="clearfix"></div>
                      <hr style={{ margin: '5px 0 5px 0' }} />



                      <div className="col-sm-5 col-xs-6 tital ">Nombre de Usuario:</div>
                      <div className="col-sm-7 col-xs-6 ">
                        <p1 id="nameLow"></p1>
                      </div>
                      <div className="clearfix"></div>
                      <div className="bot-border"></div>

                      <div className="col-sm-5 col-xs-6 tital ">Email:</div>
                      <div className="col-sm-7">
                        <p1 id="emailP"></p1>
                      </div>
                      <div className="clearfix"></div>
                      <div className="bot-border"></div>





                    </div>


                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );

  }
}

export default AccountPage;