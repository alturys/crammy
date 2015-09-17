var calculateDays = CrammyApp.Functions.Calendar.calculateDays;

Template.displayMonthSupervision.helpers({
  days: function(){
    return calculateDays();
  },
  //look for all assignation in selected month and year for current user
  userImputations : function () {
    var selectedYear = Session.get("selectedYear");
    var selectedMonth = Session.get("selectedMonth");
    var firstDayMonth = moment({ year :selectedYear, month :selectedMonth});
    var lastDayMonth = moment({ year :selectedYear, month :selectedMonth}).endOf('month');

    var monthImputations = Imputations.find({date:{
      "$gte" : firstDayMonth.toISOString(),
      "$lt" : lastDayMonth.toISOString()
      }}).fetch();

    var imputationByUser =  _.groupBy(monthImputations, "user");//groupBy produce an object
    return _.values(imputationByUser);//clean the object to an array
  }
});
