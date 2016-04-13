
import { Template } from 'meteor/templating';
import './login.html';



Template.login.events({
  'click #login'() {
    alert("Login clicked");
  },
});
