var calculateDays = CrammyApp.Functions.Calendar.calculateDays;

Template.projectRow.helpers({
  trigramme: function(){
    if (Meteor.user()) {
      return Meteor.user().profile.trigramme;
    }
  },
  project:function () {
    return this[0].code;
  },
  days:function () {
    return calculateDays();
  }
});
