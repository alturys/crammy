var calculateDays = CrammyApp.Functions.Calendar.calculateDays;

Template.supervisionRow.helpers({
  userImputationByProject: function(){
    var imputationByProject =  _.groupBy(this, "code");
    return _.values(imputationByProject);
  }
});

Template.supervisionProjectRow.helpers({
  days:function () {
    return calculateDays();
  },
  trigramme :function () {
    var idUser = this[0].user;
    var user = Meteor.users.findOne(idUser);
    return user.profile.trigramme;
  },
  project:function () {
    return this[0].code;
  },
});
