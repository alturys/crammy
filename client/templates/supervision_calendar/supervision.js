var clientCalendarFunctions = CrammyApp.Client.Functions.Calendar;

Template.supervision.helpers({
  months: function(){
    return clientCalendarFunctions.getMonths();
  }
});
