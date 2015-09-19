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

Router.route('/', {
  name:'calendar',
  loadingTemplate: 'loading',
  waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('imputations-all');
  },
  action: function () {
    this.render('calendar');
  }
});

Router.route('/login', {name: 'login'});

Router.route('/supervision', {
  name:'supervision',
  loadingTemplate: 'loading',
  waitOn: function () {
    // return one handle, a function, or an array
    return [Meteor.subscribe('imputations-all'), Meteor.subscribe('users-all'), Meteor.subscribe("imputation-code-all")];
  },
  action: function () {
    this.render('supervision');
  }
});
