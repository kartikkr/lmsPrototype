import { Template } from 'meteor/templating'
import { Session } from 'meteor/session';
import { RegisterDetails} from '../imports/api/registerdetails.js'
import '../imports/ui/login.html';
import '../imports/ui/register.html';

if (Meteor.isClient) {

  Template.body.helpers({
    showRegister() {
      return Session.get('showRegister');
    }
  });

  Template.login.events({
    'click button'() {

    },
    'click .js-show-register'(event) {
      event.preventDefault();
      Session.set('showRegister', true);
    }
  });

  Template.register.events({
    'click button'(event, data) {
      var firstname = data.find("#firstnameInput").value;
      var lastname = data.find("#lastnameInput").value;
      var username = data.find("#usernameInput").value;
      var password = data.find("#passwordInput").value;
      var repeatPassword = data.find("#repeatpasswordInput").value;
      if(password === repeatPassword) {
        var storePassword = password;
      } else {
        alert("Password did not match");
      }
      var role = data.find("#roleOption").value;

      if(storePassword) {
        RegisterDetails.insert({
          firstname,
          lastname,
          role,
          username,
          storePassword,
          createdAt: new Date()
        });
      }
      var a = RegisterDetails.find({});
      console.log(JSON.stringify(a));
    },
    'click .js-show-login'(event) {
      event.preventDefault();
      Session.set('showRegister', false);
    }
  });

}
