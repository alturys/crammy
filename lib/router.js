Router.configure({
  layoutTemplate: 'layout'
});

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        this.render('login');
      }
      else {
        this.next();
      }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired);

Router.route('/', {name: 'calendar'});

Router.route('/login', {name: 'login'});
