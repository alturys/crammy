var inputationsFunctions = CrammyApp.Functions.Imputations;
var calendarClientFunctions = CrammyApp.Client.Functions.Calendar;
var calendarFunctions = CrammyApp.Functions.Calendar;

Template.supervisionDayCell.helpers({
  imputation: function(){
    var parent = Template.parentData(1);
    var imputation = _.findWhere(parent,{date:this.toISOString()});
    if (imputation) {
      return inputationsFunctions.convertOutput(imputation.value);
    }
  },
  status : function () {
    var parent = Template.parentData(1);
    var oneImputation = parent[0];//we have at least one imputation to have a line... -> no out of bound or undefined
    var userId = oneImputation.user;
    return calendarClientFunctions.getStatus(userId,this);
  }
});

Template.supervisionDayCell.events({
  "change .calendar-cell": function(e, t){
    event.preventDefault();
    var parent = Template.parentData(1);
    var oneImputation = parent[0];//we have at least one imputation to have a line... -> no out of bound or undefined
    var userId = oneImputation.user;
    var imputationCode = oneImputation.code;
    var oneMoment = this;
    var imputationValue = event.target.value||"";
    calendarFunctions.addImputation(userId, imputationCode, oneMoment, imputationValue);
  }
});
