var calculateDays = CrammyApp.Functions.Calendar.calculateDays;

Template.addLine.helpers({
  imputationCodes: function(){
    var codes =  ImputationCode.find().fetch().map(function(it){
        return {value: it.code};
      });
    return codes;
  },
  days: function () {
    return calculateDays();
  }
});

Template.addLine.events({
  "typeahead:change": function(e, t){
    Session.set("newLineImputationCode", e.target.value);
  }
});

Template.addLine.rendered = function() {
  Meteor.typeahead.inject();
};
