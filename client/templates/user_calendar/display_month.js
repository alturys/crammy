var calculateDays = CrammyApp.Functions.Calendar.calculateDays;

Template.displayMonth.helpers({
  days: function(){
    return calculateDays();
  },
  //look for all assignation in selected month and year for current user
  userImputations : function () {
    console.log("RECHERCHE INPUTS");
    var selectedYear = Session.get("selectedYear");
    var selectedMonth = Session.get("selectedMonth");
    var firstDayMonth = moment({ year :selectedYear, month :selectedMonth});
    var lastDayMonth = moment({ year :selectedYear, month :selectedMonth}).endOf('month');

    var monthImputations = Imputations.find({user:Meteor.userId(),date:{
      "$gte" : firstDayMonth.toISOString(),
      "$lt" : lastDayMonth.toISOString()
      }}).fetch();

    //get project list for the month
    var projectList = (_.chain(monthImputations).pluck("code").uniq().value());
    //create an array of imputation by project
    var imputationByProject = [];
    _.each(projectList,function(element, index, list){
      imputationByProject.push(_.where(monthImputations, {code: element}));
    });
    return imputationByProject;
  }
});
