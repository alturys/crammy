var inputationsFunctions = CrammyApp.Functions.Imputations;
var calendarClientFunctions = CrammyApp.Client.Functions.Calendar;

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
      var oneImputation = parent[0];//we have at least one imputation to have a line...
      var userId = oneImputation.user;
      return calendarClientFunctions.getStatus(userId,this);
    }
});
