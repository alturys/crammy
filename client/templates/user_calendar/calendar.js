var clientCalendarFunctions = CrammyApp.Client.Functions.Calendar;

Template.calendar.helpers({
  months: function(){
    console.log("RENDER CALENDAR");
    console.log(this);
    return clientCalendarFunctions.getMonths();
  }
});
