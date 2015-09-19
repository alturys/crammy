var calculateDays = CrammyApp.Functions.Calendar.calculateDays;

Template.addSupervisionLine.helpers({
  imputationCodes: function(){
    var codes =  ImputationCode.find().fetch().map(function(it){
        return {value: it.code};
      });
    console.log(codes);
    return codes;
  },
  userTrig: function () {
    var users = Meteor.users.findOne();
    console.log(users);
    var usersTrig = Meteor.users.find().fetch().map(function(it){
      return {value : it.profile.trigramme};
    });
    console.log("TRIG");
    console.log(usersTrig);
    return usersTrig;
  },
  days: function () {
    return calculateDays();
  }
});

Template.addSupervisionLine.events({
  "typeahead code:change": function(e, t){
    console.log("Event code supervision");
    Session.set("newSupervisionLineImputationCode", e.target.value);
  },
  "change : #supervision-new-line-user": function(e, t){
    console.log("Event code user");
    Session.set("newSupervisionLineImputationUser", e.target.value);
  }
});

//we must inject typehead after rendering template, because data will be not fetched into helpers before...
Template.addSupervisionLine.rendered = function() {
  Meteor.typeahead.inject("#supervision-new-line-code");
  Meteor.typeahead.inject("#supervision-new-line-user");
};
