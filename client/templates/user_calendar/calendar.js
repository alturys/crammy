var clientCalendarFunctions = CrammyApp.Client.Functions.Calendar;

Template.calendar.helpers({
  months: function(){
    return clientCalendarFunctions.getMonths();
  }
});
